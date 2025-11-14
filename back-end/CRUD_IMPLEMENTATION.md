# PuppyCare Back-end API — CRUD atualizado (PostgreSQL + Prisma)

## Resumo

CRUD completo em NestJS alinhado ao novo schema Prisma com modelos em maiúsculas e IDs inteiros, rodando sobre PostgreSQL.

## O que existe no projeto

### 1) Prisma como módulo global
- `src/prisma/prisma.service.ts` — Inicializa o Prisma Client e gerencia o ciclo de vida da conexão
- `src/prisma/prisma.module.ts` — Exporta o serviço como módulo global e é importado em `app.module.ts`

### 2) Módulos CRUD implementados

Cada módulo expõe:
- Módulo (`*.module.ts`)
- Controller REST (GET, POST, PATCH, DELETE)
- Service com operações Prisma
- DTOs com validação (create/update)

#### Módulos ativos e rotas

| Módulo | Rota base | Relações carregadas (include) |
|---|---|---|
| CLIENTES | `/clientes` | pets, pacotes, atendimentos |
| PETS | `/pets` | cliente, atendimentos |
| PACOTES | `/pacotes` | cliente, servico |
| SERVICOS | `/servicos` | — |
| USUARIOS | `/usuarios` | — |
| ATENDIMENTOS | `/atendimentos` | cliente, pet, servico, imagens |
| ATENDIMENTO_IMAGENS | `/atendimento-imagens` | atendimento |

Módulos legados removidos: rotas, rotas-paradas, mensagens, status, funcionarios, ordens-servicos.

### 3) Dependências principais
- `@nestjs/common`, `@nestjs/core`, `@nestjs/swagger`
- `@prisma/client` + `prisma`
- `class-validator` e `class-transformer`

### 4) Prisma Client
Gerado automaticamente a partir do schema em `prisma/schema.prisma`. Não usamos mais a pasta `generated/prisma` legada.

## Endpoints principais

### CLIENTES
```http
GET    /clientes
GET    /clientes/:id
POST   /clientes
PATCH  /clientes/:id
DELETE /clientes/:id
```

### PETS
```http
GET    /pets
GET    /pets/:id
POST   /pets
PATCH  /pets/:id
DELETE /pets/:id
```

### PACOTES
```http
GET    /pacotes
GET    /pacotes/:id
POST   /pacotes
PATCH  /pacotes/:id
DELETE /pacotes/:id
```

### SERVICOS
```http
GET    /servicos
GET    /servicos/:id
POST   /servicos
PATCH  /servicos/:id
DELETE /servicos/:id
```

### USUARIOS
```http
GET    /usuarios
GET    /usuarios/:id
POST   /usuarios
PATCH  /usuarios/:id
DELETE /usuarios/:id
```

### ATENDIMENTOS
```http
GET    /atendimentos
GET    /atendimentos/:id
POST   /atendimentos
PATCH  /atendimentos/:id
DELETE /atendimentos/:id
```

### ATENDIMENTO_IMAGENS
```http
GET    /atendimento-imagens
GET    /atendimento-imagens/:id
POST   /atendimento-imagens
PATCH  /atendimento-imagens/:id
DELETE /atendimento-imagens/:id
```

## Exemplos de DTOs (novos campos em MAIÚSCULAS)

### CreateClienteDto
```ts
{
  NOME: string;         // obrigatório
  TELEFONE: string;     // obrigatório
  ENDERECO: string;     // obrigatório
}
```

### CreatePetDto
```ts
{
  ID_CLIENTE: number;   // obrigatório (FK)
  NOME: string;         // obrigatório
  RACA?: string;        // opcional
  DATA_NASC?: string;   // opcional (ISO date string)
}
```

### CreatePacoteDto
```ts
{
  ID_CLIENTE: number;   // obrigatório (FK)
  ID_SERVICO: number;   // obrigatório (FK)
  QTD_BANHOS?: number;  // opcional (default 0)
}
```

### CreateServicoDto
```ts
{
  NOME: string;
  DESCRICAO?: string;
  VALOR?: string; // decimal no banco, string na API
}
```

### CreateUsuarioDto
```ts
{
  NOME: string;
  DESCRICAO?: string;
  SENHA_HASH: string;
}
```

### CreateAtendimentoDto
```ts
{
  ID_CLIENTE: number;   // FK
  ID_PET: number;       // FK
  ID_SERVICO: number;   // FK
  VALOR_COBRADO?: string; // decimal como string
  TIPO?: string;
  NOTAS?: string;
}
```

### CreateAtendimentoImagemDto
```ts
{
  ID_ATENDIMENTO: number;   // FK
  CAMINHO_IMAGEM: string;
}
```

## Validação e erros

- DTOs usam `class-validator`/`class-transformer` com `ValidationPipe` global (whitelist + transform)
- `NotFoundException` em GET/PATCH/DELETE quando o registro não existe
- Tratamento básico de erros do Prisma (ex.: constraints únicas / FKs)

## Banco de dados: PostgreSQL

- Datasource configurado via `DATABASE_URL` (PostgreSQL)
- Docker Compose disponível em `docker-compose.yml` (imagem `postgres:16-alpine`)
- Comandos úteis:

```powershell
# subir banco com Docker
docker-compose up -d

# preparar banco + seed
npm run db:setup

# abrir Prisma Studio
npm run prisma:studio
```

Mais detalhes em `POSTGRES_SETUP.md`.

## Rodando a API

```powershell
# instalar deps
npm install

# iniciar em modo desenvolvimento
npm run dev
```

Swagger disponível em: http://localhost:4000/api

## Notas do schema

- IDs inteiros auto-incrementais (INT) nos modelos
- Campos/relacionamentos principais:
  - CLIENTES → PETS (1:N)
  - CLIENTES → PACOTES (1:N)
  - PETS → ATENDIMENTOS (1:N)
  - SERVICOS ↔ ATENDIMENTOS (N:1)
  - ATENDIMENTOS → ATENDIMENTO_IMAGENS (1:N)

## Estrutura (resumo)

```
src/
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── clientes/
├── pets/
├── pacotes/
├── servicos/
├── usuarios/
├── atendimentos/
└── atendimento-imagens/
```

## Troubleshooting rápido

- Erro P1001 (conexão): verifique Docker/credenciais `DATABASE_URL`
- Prisma Client desatualizado: `npm run prisma:generate`
- Reset de dev: `npx prisma db push --force-reset` (CUIDADO: apaga dados)

—

Módulos atualizados e prontos para uso com PostgreSQL.
