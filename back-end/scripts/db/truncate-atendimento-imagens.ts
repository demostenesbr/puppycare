import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔎 Contando registros antes...');
  const before = await prisma.aTENDIMENTO_IMAGENS.count();
  console.log(`ATENDIMENTO_IMAGENS (antes): ${before}`);

  // Opção 1: deleteMany (não reinicia a sequence/ID)
  // await prisma.aTENDIMENTO_IMAGENS.deleteMany({});

  // Opção 2: TRUNCATE (reinicia IDENTITY e apaga dependências com CASCADE)
  // Observação: Use com cuidado. Certifique-se de que não há dados importantes.
  await prisma.$executeRawUnsafe(
    'TRUNCATE TABLE "ATENDIMENTO_IMAGENS" RESTART IDENTITY CASCADE;'
  );

  const after = await prisma.aTENDIMENTO_IMAGENS.count();
  console.log(`ATENDIMENTO_IMAGENS (depois): ${after}`);
}

main()
  .catch(async (e) => {
    console.error('❌ Erro ao truncar ATENDIMENTO_IMAGENS:', e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
