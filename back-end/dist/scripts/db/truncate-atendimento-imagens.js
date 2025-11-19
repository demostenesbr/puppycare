"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🔎 Contando registros antes...');
    const before = await prisma.aTENDIMENTO_IMAGENS.count();
    console.log(`ATENDIMENTO_IMAGENS (antes): ${before}`);
    await prisma.$executeRawUnsafe('TRUNCATE TABLE "ATENDIMENTO_IMAGENS" RESTART IDENTITY CASCADE;');
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
//# sourceMappingURL=truncate-atendimento-imagens.js.map