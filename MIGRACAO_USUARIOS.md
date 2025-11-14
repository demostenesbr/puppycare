# Migração: Funcionários → Usuários (Front-end)

## ✅ Concluído

### Arquivos criados
1. **`front-end/src/types/usuario.ts`** - Tipos TypeScript para Usuario e UsuarioType
2. **`front-end/src/components/ui/custom/UsuarioCard.tsx`** - Card de listagem de usuários
3. **`front-end/src/components/ui/custom/UsuarioConfig.tsx`** - Modal de edição de usuários
4. **`front-end/src/app/api/usuarios/route.ts`** - API Route proxy (GET, POST)
5. **`front-end/src/app/api/usuarios/[id]/route.ts`** - API Route proxy (GET, PATCH, DELETE)

### Arquivos atualizados
1. **`front-end/src/app/admin/usuarios/page.tsx`** - Página principal renomeada e refatorada
   - `FuncionariosPage` → `UsuariosPage`
   - `funcionarios` → `usuarios` (estado)
   - `fetchFuncionarios` → `fetchUsuarios`
   - `/api/funcionarios` → `/api/usuarios`
   - Todas as referências de texto atualizadas

2. **`front-end/src/app/admin/page.tsx`** - Dashboard admin
   - Import: `FuncionariosPage` → `UsuariosPage`
   - Tipo do estado: `"funcionarios"` → `"usuarios"`
   - Label do menu: "Funcionários" → "Usuários"

3. **`INTEGRACAO_ADMIN.md`** - Documentação atualizada
   - Seção 2.5 reescrita refletindo a migração
   - Status atualizado: Front-end completo, aguardando back-end

## 📋 Mudanças de nomenclatura

| Antes | Depois |
|-------|--------|
| `funcionario.ts` | `usuario.ts` |
| `Funcionario` (tipo) | `Usuario` |
| `FuncionarioType` | `UsuarioType` |
| `FuncionariosPage` | `UsuariosPage` |
| `FuncionariosCard` | `UsuariosCard` |
| `FuncionarioConfig` | `UsuarioConfig` |
| `/api/funcionarios` | `/api/usuarios` |
| `fetchFuncionarios()` | `fetchUsuarios()` |
| `numFuncionarios` | Mantido (representa o tipo "funcionario", não todos) |
| `totalFuncionarios` | `totalUsuarios` |
| `filteredFuncionarios` | `filteredUsuarios` |

## ⚠️ Próximo passo: Back-end

O front-end agora espera o endpoint `/usuarios` com a seguinte estrutura:

```typescript
interface Usuario {
  id: number;           // ID_USUARIO no Prisma
  name: string;         // NOME
  email: string;        // ⚠️ Precisa adicionar no schema
  type: string[];       // ⚠️ Precisa adicionar no schema
  image: string;        // ⚠️ Precisa adicionar no schema
}
```

### Schema Prisma necessário:

```prisma
model USUARIOS {
  ID_USUARIO   Int      @id @default(autoincrement())
  NOME         String   @db.VarChar(100)
  EMAIL        String?  @unique @db.VarChar(100)  // ADICIONAR
  TIPO         String[] @default(["funcionario"])  // ADICIONAR
  IMAGEM       String?  @db.VarChar(255)          // ADICIONAR
  DESCRICAO    String?
  SENHA_HASH   String   @db.VarChar(255)
  ATIVO        Boolean  @default(true)            // ADICIONAR
  DATA_CRIACAO DateTime @default(now())            // ADICIONAR (opcional)
}
```

### DTOs necessários:

```typescript
// CreateUsuarioDto
export class CreateUsuarioDto {
  @IsString()
  NOME: string;

  @IsOptional()
  @IsEmail()
  EMAIL?: string;

  @IsOptional()
  @IsArray()
  TIPO?: string[];

  @IsOptional()
  @IsString()
  IMAGEM?: string;

  @IsOptional()
  @IsString()
  DESCRICAO?: string;

  @IsString()
  SENHA_HASH: string;

  @IsOptional()
  @IsBoolean()
  ATIVO?: boolean;
}

// UpdateUsuarioDto
export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}
```

### Comandos para aplicar:

```powershell
# 1. Atualizar schema.prisma com os campos acima
# 2. Sincronizar com banco
npx prisma db push

# 3. Gerar Prisma Client
npx prisma generate

# 4. Atualizar DTOs em back-end/src/usuarios/dto/

# 5. Atualizar service para mapear campos:
# - ID_USUARIO → id
# - NOME → name
# - EMAIL → email
# - TIPO → type
# - IMAGEM → image

# 6. Rebuild
npm run build

# 7. Testar
npm run dev
```

## 🧪 Como testar

### 1. Iniciar back-end (após aplicar mudanças):
```powershell
cd back-end
npm run dev
```

### 2. Iniciar front-end:
```powershell
cd front-end
npm run dev
```

### 3. Acessar:
- Front: http://localhost:3000/admin
- Clicar em "Usuários" no menu lateral
- Verificar se lista usuários do banco
- Testar edição clicando nos 3 pontos

### 4. Verificar API direto:
```powershell
# Listar todos
curl http://localhost:3000/api/usuarios

# Buscar um específico
curl http://localhost:3000/api/usuarios/1

# Atualizar (necessita body JSON)
curl -X PATCH http://localhost:3000/api/usuarios/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Nome Atualizado"}'
```

## 📝 Observações

1. **Arquivos antigos mantidos (não deletados):**
   - `funcionario.ts` (pode ser removido após confirmar que tudo funciona)
   - `FuncionarioCard.tsx` (pode ser removido)
   - `FuncionarioConfig.tsx` (pode ser removido)
   - `/api/funcionarios/` (pode ser removido)

2. **Pasta `/admin/funcionarios/` renomeada para `/admin/usuarios/`** ✅

3. **Tipos de usuário mantidos:**
   - `administrador`
   - `funcionario`
   - `condutor`

4. **Validação front-end:**
   - Email não é obrigatório
   - Tipo é multi-seleção (array)
   - Campos opcionais: email, imagem, descrição

---

**Status:** ✅ Front-end 100% migrado  
**Pendente:** Ajustes no schema + DTOs do back-end
