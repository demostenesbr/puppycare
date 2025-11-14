# Estudo: Integração Admin Front-end → Back-end NestJS

**Data:** 6 de novembro de 2025  
**Objetivo:** Mapear a integração entre `front-end/src/app/admin` e a API NestJS PostgreSQL

---

## 1. Arquitetura atual

### Front-end (Next.js 15 + React 19)
- **Framework:** Next.js 15 com App Router
- **UI:** Tailwind CSS + Radix UI + Lucide Icons
- **Estado:** React useState/useEffect (sem gerenciador global por enquanto)
- **Requisições:** fetch nativo (via Next.js API Routes como proxy)

### Back-end (NestJS + Prisma + PostgreSQL)
- **URL:** `http://localhost:4000`
- **Swagger:** `http://localhost:4000/api`
- **Banco:** PostgreSQL (Docker: `puppycare-postgres`)
- **Módulos ativos:** CLIENTES, PETS, PACOTES, SERVICOS, USUARIOS, ATENDIMENTOS, ATENDIMENTO_IMAGENS

---

## 2. Páginas Admin Front-end

### 2.1 `/admin` (Dashboard principal)
**Arquivo:** `front-end/src/app/admin/page.tsx`

**Estado atual:**
- Menu lateral expansível/recolhível
- 5 seções: Agendamentos, Clientes, Análise, Funcionários, Opções
- Renderização condicional baseada em `paginaAtual` (estado local)

**Integração back-end:**
- ❌ Nenhuma chamada API ainda
- ✅ Estrutura pronta para receber dados

---

### 2.2 `/admin/agendamento`
**Arquivo:** `front-end/src/app/admin/agendamento/page.tsx`

**Estado atual:**
- Componente `<UpcomingSchedule />` com dados mockados (hardcoded)
- Exibe calendário semanal + 3 agendamentos fixos

**Mapeamento back-end necessário:**
```
Front-end (esperado)          →  Back-end (disponível)
-------------------------------------------------------------
Agendamentos próximos         →  GET /atendimentos
  - data                      →  (sem campo DATA_AGENDADA no schema atual!)
  - horário                   →  (sem campo HORARIO no schema!)
  - cliente                   →  ATENDIMENTOS.CLIENTE (relação)
  - pet                       →  ATENDIMENTOS.PET (relação)
  - serviço                   →  ATENDIMENTOS.SERVICO (relação)
```

**⚠️ Problema identificado:**
O schema `ATENDIMENTOS` não tem campos de data/horário agendado. Campos atuais:
- ID_ATENDIMENTO, ID_CLIENTE, ID_PET, ID_SERVICO
- VALOR_COBRADO, TIPO, NOTAS
- **Falta:** DATA_AGENDADA, HORARIO, STATUS

**Solução:**
1. Adicionar campos no schema Prisma:
   ```prisma
   model ATENDIMENTOS {
     // ... campos existentes
     DATA_AGENDADA DateTime?
     HORARIO       String?    @db.VarChar(10)  // ex: "14:30"
     STATUS        String?    @db.VarChar(50)  // "agendado", "concluido", "cancelado"
   }
   ```
2. Rodar `npx prisma db push`
3. Atualizar DTOs em `back-end/src/atendimentos/dto/`

---

### 2.3 `/admin/clientes`
**Arquivo:** `front-end/src/app/admin/clientes/page.tsx`

**Estado atual:**
- Apenas placeholder: `<h1>Teste texto clientes</h1>`

**Mapeamento back-end:**
```
Front-end (esperado)          →  Back-end (disponível)
-------------------------------------------------------------
Lista de clientes             →  GET /clientes
  - id                        →  ID_CLIENTE
  - nome                      →  NOME
  - telefone                  →  TELEFONE
  - endereco                  →  ENDERECO
  - pets (array)              →  CLIENTES.PETS (include)
  - total de atendimentos     →  CLIENTES.ATENDIMENTOS.length
```

**✅ API pronta! Apenas precisa:**
1. Criar componente de tabela/listagem
2. Adicionar fetch:
   ```tsx
   const [clientes, setClientes] = useState([]);
   
   useEffect(() => {
     fetch('/api/clientes')
       .then(res => res.json())
       .then(data => setClientes(data));
   }, []);
   ```

---

### 2.4 `/admin/analise`
**Arquivo:** `front-end/src/app/admin/analise/page.tsx`

**Estado atual:**
- Estatísticas hardcoded:
  - 87 Clientes, 87 Pets, 20 Pacotes
  - Métricas de visitantes/vendas (mock)

**Mapeamento back-end:**
```
Front-end (esperado)          →  Back-end (necessário)
-------------------------------------------------------------
Total de clientes             →  GET /clientes (count)
Total de pets                 →  GET /pets (count)
Total de pacotes              →  GET /pacotes (count)
Faturamento total             →  Agregar ATENDIMENTOS.VALOR_COBRADO
Atendimentos este mês         →  Filter por DATA_AGENDADA (após adicionar)
```

**Solução:**
1. Criar endpoint agregador `/analytics` ou usar endpoints existentes com query params
2. Exemplo (no back-end):
   ```ts
   // atendimentos.controller.ts
   @Get('stats')
   async getStats() {
     const total = await this.prisma.aTENDIMENTOS.count();
     const faturamento = await this.prisma.aTENDIMENTOS.aggregate({
       _sum: { VALOR_COBRADO: true }
     });
     return { total, faturamento: faturamento._sum.VALOR_COBRADO };
   }
   ```

---

### 2.5 `/admin/usuarios`
**Arquivo:** `front-end/src/app/admin/usuarios/page.tsx`

**Estado atual:**
- ✅ **MIGRADO DE FUNCIONARIOS PARA USUARIOS!**
- Busca usuários via `/api/usuarios` (proxy Next.js)
- CRUD: GET (listar), PATCH (atualizar)
- Componentes atualizados: `UsuariosCard`, `UsuarioConfig`
- Tipos atualizados: `Usuario`, `UsuarioType`

**API Routes existentes:**
```
front-end/src/app/api/usuarios/route.ts        → GET, POST /usuarios
front-end/src/app/api/usuarios/[id]/route.ts   → GET, PATCH, DELETE /usuarios/:id
```

**Mapeamento back-end necessário:**
```
Front-end espera        →  Back-end precisa
-----------------------------------------------------------------
/usuarios               →  ✅ USUARIOS existe
  - id                  →  ✅ USUARIOS.ID_USUARIO
  - name                →  ✅ USUARIOS.NOME
  - email               →  ⚠️ Adicionar no schema
  - type (array)        →  ⚠️ Adicionar no schema (["admin", "funcionario", "condutor"])
  - image               →  ⚠️ Adicionar no schema
```

**Ajustes necessários no schema USUARIOS:**
```prisma
model USUARIOS {
  ID_USUARIO   Int      @id @default(autoincrement())
  NOME         String   @db.VarChar(100)
  EMAIL        String?  @unique @db.VarChar(100)  // NOVO
  TIPO         String[] @default(["funcionario"])  // NOVO
  IMAGEM       String?  @db.VarChar(255)          // NOVO
  DESCRICAO    String?
  SENHA_HASH   String   @db.VarChar(255)
  ATIVO        Boolean  @default(true)            // NOVO
  DATA_CRIACAO DateTime @default(now())            // NOVO
}
```

**Status:** ✅ Front-end atualizado, aguardando ajustes no schema back-end

---

## 3. Proxy API Routes (Next.js)

### Estrutura atual
```
front-end/src/app/api/
└── usuarios/
    ├── route.ts          → GET proxy para http://localhost:4000/usuarios
    └── [id]/route.ts     → PATCH proxy para http://localhost:4000/usuarios/:id
```

### Para adicionar mais rotas:

**Exemplo: Clientes**
```typescript
// front-end/src/app/api/clientes/route.ts
import { NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

export async function GET() {
  const res = await fetch(`${BACKEND_URL}/clientes`);
  if (!res.ok) return NextResponse.json({ error: "Erro ao buscar clientes" }, { status: res.status });
  return NextResponse.json(await res.json());
}

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch(`${BACKEND_URL}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) return NextResponse.json({ error: "Erro ao criar cliente" }, { status: res.status });
  return NextResponse.json(await res.json());
}
```

---

## 4. Ajustes necessários no Back-end

### 4.1 Schema Prisma (URGENTE)

**Adicionar campos em ATENDIMENTOS:**
```prisma
model ATENDIMENTOS {
  ID_ATENDIMENTO Int                   @id @default(autoincrement())
  ID_CLIENTE     Int
  CLIENTE        CLIENTES              @relation(fields: [ID_CLIENTE], references: [ID_CLIENTE])
  ID_PET         Int
  PET            PETS                  @relation(fields: [ID_PET], references: [ID_PET])
  ID_SERVICO     Int
  SERVICO        SERVICOS              @relation(fields: [ID_SERVICO], references: [ID_SERVICO])
  
  // Campos existentes
  VALOR_COBRADO  Decimal
  TIPO           String                @db.VarChar(50)
  NOTAS          String?
  
  // NOVOS (necessários para agendamento)
  DATA_AGENDADA  DateTime?             // Data do agendamento
  HORARIO        String?               @db.VarChar(10) // Ex: "14:30"
  STATUS         String                @default("agendado") @db.VarChar(50)
  DATA_CRIACAO   DateTime              @default(now())
  DATA_CONCLUSAO DateTime?
  
  IMAGENS        ATENDIMENTO_IMAGENS[]
}
```

**Estender USUARIOS (para substituir usuarios):**
```prisma
model USUARIOS {
  ID_USUARIO   Int      @id @default(autoincrement())
  NOME         String   @db.VarChar(100)
  EMAIL        String?  @unique @db.VarChar(100)
  TIPO         String[] @default(["funcionario"]) // ["admin", "funcionario", "condutor"]
  IMAGEM       String?  @db.VarChar(255)
  DESCRICAO    String?
  SENHA_HASH   String   @db.VarChar(255)
  ATIVO        Boolean  @default(true)
  DATA_CRIACAO DateTime @default(now())
}
```

**Após alterar:**
```powershell
npx prisma db push
npx prisma generate
npm run build  # recompilar NestJS
```

---

### 4.2 DTOs a atualizar

**CreateAtendimentoDto:**
```typescript
import { IsInt, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateAtendimentoDto {
  @IsInt()
  ID_CLIENTE: number;

  @IsInt()
  ID_PET: number;

  @IsInt()
  ID_SERVICO: number;

  @IsOptional()
  @IsString()
  VALOR_COBRADO?: string;

  @IsOptional()
  @IsString()
  TIPO?: string;

  @IsOptional()
  @IsString()
  NOTAS?: string;

  // NOVOS
  @IsOptional()
  @IsDateString()
  DATA_AGENDADA?: string; // ISO 8601

  @IsOptional()
  @IsString()
  HORARIO?: string; // "HH:MM"

  @IsOptional()
  @IsString()
  STATUS?: string; // "agendado" | "concluido" | "cancelado"
}
```

---

### 4.3 Endpoints adicionais úteis

**Analytics endpoint (opcional, mas recomendado):**
```typescript
// back-end/src/analytics/analytics.controller.ts
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private prisma: PrismaService) {}

  @Get('dashboard')
  async getDashboard() {
    const [clientes, pets, pacotes, atendimentos, faturamento] = await Promise.all([
      this.prisma.cLIENTES.count(),
      this.prisma.pETS.count(),
      this.prisma.pACOTES.count(),
      this.prisma.aTENDIMENTOS.count(),
      this.prisma.aTENDIMENTOS.aggregate({
        _sum: { VALOR_COBRADO: true },
      }),
    ]);

    return {
      clientes,
      pets,
      pacotes,
      atendimentos,
      faturamento: faturamento._sum.VALOR_COBRADO?.toString() || '0',
    };
  }

  @Get('atendimentos-hoje')
  async getAtendimentosHoje() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);

    return this.prisma.aTENDIMENTOS.findMany({
      where: {
        DATA_AGENDADA: {
          gte: hoje,
          lt: amanha,
        },
      },
      include: {
        CLIENTE: true,
        PET: true,
        SERVICO: true,
      },
      orderBy: { HORARIO: 'asc' },
    });
  }
}
```

---

## 5. Variáveis de ambiente

### Front-end
Criar `front-end/.env.local`:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:4000
```

### Back-end
Já existe `.env` com:
```env
DATABASE_URL="postgresql://puppycare:puppycare_pass@localhost:5432/puppycare"
PORT=4000
```

---

## 6. Roadmap de integração (ordem sugerida)

### Fase 1: Preparação Back-end ⚠️ URGENTE
- [ ] Adicionar campos `DATA_AGENDADA`, `HORARIO`, `STATUS` em `ATENDIMENTOS`
- [ ] Estender `USUARIOS` com `EMAIL`, `TIPO[]`, `IMAGEM`, `ATIVO`
- [ ] Atualizar DTOs correspondentes
- [ ] Rodar `npx prisma db push` + rebuild

### Fase 2: Analytics
- [ ] Criar módulo `analytics` no back-end
- [ ] Implementar endpoints `/analytics/dashboard` e `/analytics/atendimentos-hoje`
- [ ] Adicionar API Route no front: `/api/analytics/route.ts`
- [ ] Conectar página `/admin/analise` com dados reais

### Fase 3: Agendamentos
- [ ] Criar API Route `/api/atendimentos/route.ts`
- [ ] Refatorar `<UpcomingSchedule>` para buscar dados reais
- [ ] Adicionar filtros por data (semana atual)
- [ ] Implementar ordenação por horário

### Fase 4: Clientes
- [ ] Criar API Routes CRUD completo: `/api/clientes/route.ts` e `/api/clientes/[id]/route.ts`
- [ ] Criar componente `<ClientesTable>` com search e paginação
- [ ] Implementar modal de criação/edição
- [ ] Listar pets de cada cliente (expandível)

### Fase 5: Funcionários → Usuários
- [ ] Decidir: reativar `usuarios` ou migrar para `usuarios`
- [ ] Atualizar rotas API do front para `/api/usuarios`
- [ ] Ajustar tipos TypeScript (`funcionario.ts` → `usuario.ts`)
- [ ] Testar CRUD completo

### Fase 6: Testes e polish
- [ ] Adicionar loading states em todas as páginas
- [ ] Implementar error handling (toasts/notificações)
- [ ] Validar formulários com Zod ou react-hook-form
- [ ] Adicionar paginação onde necessário
- [ ] Otimizar queries Prisma (select específico ao invés de include all)

---

## 7. Componentes reutilizáveis recomendados

### 7.1 Hook customizado: useFetch
```typescript
// front-end/src/hooks/useFetch.ts
import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
```

### 7.2 Componente de Loading
```typescript
// front-end/src/components/ui/custom/LoadingSpinner.tsx
export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
    </div>
  );
}
```

### 7.3 Componente de Erro
```typescript
// front-end/src/components/ui/custom/ErrorMessage.tsx
export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <p className="font-bold">Erro!</p>
      <p>{message}</p>
    </div>
  );
}
```

---

## 8. Tipos TypeScript compartilhados

### Proposta: Criar types unificados

**front-end/src/types/api.ts:**
```typescript
// Baseado no schema Prisma do back-end

export interface Cliente {
  ID_CLIENTE: number;
  NOME: string;
  TELEFONE: string;
  ENDERECO: string;
  PETS?: Pet[];
  PACOTES?: Pacote[];
  ATENDIMENTOS?: Atendimento[];
}

export interface Pet {
  ID_PET: number;
  NOME: string;
  RACA?: string;
  DATA_NASC?: string;
  ID_CLIENTE: number;
  CLIENTE?: Cliente;
  ATENDIMENTOS?: Atendimento[];
}

export interface Servico {
  ID_SERVICO: number;
  NOME: string;
  DESCRICAO?: string;
  VALOR: string; // Decimal como string
}

export interface Usuario {
  ID_USUARIO: number;
  NOME: string;
  EMAIL?: string;
  TIPO: ('admin' | 'funcionario' | 'condutor')[];
  IMAGEM?: string;
  DESCRICAO?: string;
  ATIVO: boolean;
}

export interface Atendimento {
  ID_ATENDIMENTO: number;
  ID_CLIENTE: number;
  ID_PET: number;
  ID_SERVICO: number;
  VALOR_COBRADO: string;
  TIPO: string;
  NOTAS?: string;
  DATA_AGENDADA?: string; // ISO 8601
  HORARIO?: string;
  STATUS: 'agendado' | 'concluido' | 'cancelado';
  CLIENTE?: Cliente;
  PET?: Pet;
  SERVICO?: Servico;
  IMAGENS?: AtendimentoImagem[];
}

export interface AtendimentoImagem {
  ID_IMAGEM: number;
  ID_ATENDIMENTO: number;
  CAMINHO_IMAGEM: string;
  DATA_UPLOAD: string;
}

export interface Pacote {
  ID_ASSINATURA: number;
  ID_CLIENTE: number;
  ID_SERVICO: number;
  QTD_BANHOS: number;
  CLIENTE?: Cliente;
  SERVICO?: Servico;
}

export interface AnalyticsDashboard {
  clientes: number;
  pets: number;
  pacotes: number;
  atendimentos: number;
  faturamento: string;
}
```

---

## 9. Checklist final de validação

### Back-end
- [ ] Todos os endpoints documentados no Swagger
- [ ] CORS habilitado para `http://localhost:3000`
- [ ] Validação de DTOs funcionando (class-validator)
- [ ] Prisma Client atualizado após mudanças no schema
- [ ] Testes unitários passando
- [ ] Seed com dados de teste para dev

### Front-end
- [ ] Variável de ambiente `NEXT_PUBLIC_BACKEND_URL` configurada
- [ ] API Routes criadas para todas as entidades
- [ ] Tipos TypeScript alinhados com o back-end
- [ ] Loading states implementados
- [ ] Error handling implementado
- [ ] UI responsiva (mobile-first)

### Integração
- [ ] Front-end consegue listar dados do back-end
- [ ] Front-end consegue criar registros
- [ ] Front-end consegue editar registros
- [ ] Front-end consegue deletar registros
- [ ] Relações sendo carregadas corretamente (includes)
- [ ] Validações do back-end sendo exibidas no front

---

## 10. Próximos passos imediatos

1. **URGENTE:** Atualizar schema Prisma com campos de agendamento
2. Criar módulo `analytics` no back-end
3. Implementar API Routes para `clientes` e `atendimentos`
4. Refatorar página de agendamentos para consumir dados reais
5. Decidir sobre funcionários vs usuários e implementar solução escolhida

---

**Status:** ✅ Análise completa  
**Bloqueadores:** Schema Prisma precisa de campos adicionais antes de conectar agendamentos  
**Recomendação:** Começar pela Fase 1 (ajustes no back-end) antes de prosseguir com integração
