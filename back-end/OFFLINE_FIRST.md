# Offline-first backend plan

This document describes the minimal backend changes to support offline-first sync (incremental, conflict-aware) for the Puppycare app.

## Goals
- Allow clients to fetch only changes since a given timestamp.
- Support idempotent upserts from clients with temporary IDs.
- Resolve conflicts deterministically (last-writer-wins by UPDATED_AT + VERSION as a first step).
- Enable soft-delete and eventual consistency.

## Schema requirements
For each model (USUARIOS, CLIENTES, PETS, PACOTES, SERVICOS, ATENDIMENTOS, ATENDIMENTO_IMAGENS):

- PUBLIC_ID: String @unique @default(uuid())
- CREATED_AT: DateTime @default(now())
- UPDATED_AT: DateTime @updatedAt
- DELETED_AT: DateTime? (null = active, non-null = soft-deleted)
- VERSION: Int @default(1)
- Index on UPDATED_AT for incremental queries

These were added in prisma/schema.prisma. Migrations must be applied.

## API surfaces
Provide generic sync endpoints per entity, namespaced by resource. Example for USUARIOS:

- GET /usuarios/changes?since=2025-01-01T00:00:00.000Z
  - Returns: all rows where UPDATED_AT > since OR soft-deleted (DELETED_AT is not null and >= since)
  - Include tombstones (records with DELETED_AT) so clients can delete locally

- POST /usuarios/batch
  - Body: array of records with shape { publicId?, nome, descricao?, senhaHash?, updatedAt?, version?, deletedAt? }
  - Behavior: upsert by PUBLIC_ID (if missing, create with a new UUID)
  - Conflict: compare incoming.updatedAt vs server.UPDATED_AT
    - If incoming is newer: apply change, increment VERSION
    - If incoming is older: reject item and include server state in response
  - Idempotency: when the same payload arrives again, no-op

- DELETE /usuarios/:publicId (soft delete)
  - Marks DELETED_AT = now(), increments VERSION

Repeat the same for other resources. Consider a common SyncService to share logic.

## Suggested DTOs (NestJS)
```ts
// dto/sync.dto.ts
export interface SyncUpsertDto {
  publicId?: string;
  payload: Record<string, unknown>; // validated per entity
  updatedAt?: string; // ISO string
  version?: number;
  deletedAt?: string | null;
}

export interface SyncBatchRequestDto {
  items: SyncUpsertDto[];
}

export interface SyncBatchResultItem {
  publicId: string;
  status: 'applied' | 'conflict' | 'skipped';
  server?: any; // normalized server state when conflict
}

export interface SyncBatchResponseDto {
  results: SyncBatchResultItem[];
}
```

## Example query patterns (Prisma)
```ts
// changes
prisma.uSUARIOS.findMany({
  where: {
    OR: [
      { UPDATED_AT: { gt: since } },
      { DELETED_AT: { not: null, gte: since } },
    ],
  },
  orderBy: { UPDATED_AT: 'asc' },
});

// upsert by PUBLIC_ID
const existing = await prisma.uSUARIOS.findUnique({ where: { PUBLIC_ID: publicId } });
if (!existing) {
  await prisma.uSUARIOS.create({ data: {/* ... */} });
} else {
  if (incoming.updatedAt && new Date(incoming.updatedAt) > existing.UPDATED_AT) {
    await prisma.uSUARIOS.update({ where: { PUBLIC_ID: publicId }, data: {/* ... */} });
  } else {
    // conflict or stale write
  }
}
```

## Conflict policy
- Phase 1: Last-writer-wins by UPDATED_AT; tie-break on VERSION, then server wins.
- Phase 2 (optional): Field-level merge for free-text fields; keep LWW for the rest.

## Migration and rollout
1) Apply Prisma migration and regenerate client.
2) Add sync endpoints for USUARIOS first; test with mobile cache.
3) Expand to CLIENTES, PETS, ATENDIMENTOS, SERVICOS and PACOTES.
4) Add e2e tests covering since-filter and conflict.

## Non-goals (for now)
- Complex CRDTs, multi-master merge beyond LWW.
- Background backfill or compaction of tombstones.

## Notes
- PUBLIC_ID enables stable references across devices and environments.
- Keep traditional numeric IDs for internal joins; map PUBLIC_ID <-> ID_* in services.
- Consider rate-limiting and auth before enabling sync in production.
