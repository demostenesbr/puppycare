import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedServicos() {
  const count = await prisma.sERVICOS.count();
  if (count === 0) {
    await prisma.sERVICOS.createMany({
      data: [
        { NOME: 'Banho', DESCRICAO: 'Banho completo para pets', VALOR: '79.90' },
        { NOME: 'Tosa', DESCRICAO: 'Tosa higiênica e completa', VALOR: '120.00' },
      ],
    });
    console.log('✅ SERVICOS created');
  } else {
    console.log('ℹ️ SERVICOS already have data, skipping creation');
  }
  // return map of services by name for convenience
  const all = await prisma.sERVICOS.findMany();
  return {
    byName: Object.fromEntries(all.map((s) => [s.NOME, s])),
    list: all,
  } as const;
}

async function seedClientes() {
  const count = await prisma.cLIENTES.count();
  if (count === 0) {
    await prisma.cLIENTES.createMany({
      data: [
        { NOME: 'Maria Silva', TELEFONE: '11999990001', ENDERECO: 'Rua A, 123 - Centro, São Paulo/SP' },
        { NOME: 'João Pereira', TELEFONE: '11988880002', ENDERECO: 'Av. B, 200 - Bela Vista, São Paulo/SP' },
      ],
    });
    console.log('✅ CLIENTES created');
  } else {
    console.log('ℹ️ CLIENTES already have data, skipping creation');
  }
  const all = await prisma.cLIENTES.findMany();
  return {
    byName: Object.fromEntries(all.map((c) => [c.NOME, c])),
    list: all,
  } as const;
}

async function seedUsuarios() {
  const count = await prisma.uSUARIOS.count();
  if (count === 0) {
    await prisma.uSUARIOS.createMany({
      data: [
        { NOME: 'Administrador', DESCRICAO: 'Usuário administrador padrão', SENHA_HASH: 'hash_teste' },
        { NOME: 'Operador', DESCRICAO: 'Usuário operador', SENHA_HASH: 'hash_teste' },
      ],
    });
    console.log('✅ USUARIOS created');
  } else {
    console.log('ℹ️ USUARIOS already have data, skipping creation');
  }
}

async function seedPets(clienteId: number) {
  const count = await prisma.pETS.count({ where: { ID_CLIENTE: clienteId } });
  if (count === 0) {
    await prisma.pETS.createMany({
      data: [
        { NOME: 'Rex', RACA: 'Vira-lata', DATA_NASC: new Date('2020-01-01'), ID_CLIENTE: clienteId },
        { NOME: 'Luna', RACA: 'Poodle', DATA_NASC: new Date('2019-06-10'), ID_CLIENTE: clienteId },
      ],
    });
    console.log('✅ PETS created');
  } else {
    console.log('ℹ️ PETS already have data for this cliente, skipping creation');
  }
  const all = await prisma.pETS.findMany({ where: { ID_CLIENTE: clienteId } });
  return all;
}

async function seedPacotes(clienteId: number, servicoId: number) {
  const count = await prisma.pACOTES.count({ where: { ID_CLIENTE: clienteId, ID_SERVICO: servicoId } });
  if (count === 0) {
    await prisma.pACOTES.create({
      data: {
        ID_CLIENTE: clienteId,
        ID_SERVICO: servicoId,
        QTD_BANHOS: 4,
      },
    });
    console.log('✅ PACOTES created');
  } else {
    console.log('ℹ️ PACOTES already have data for this cliente/servico, skipping creation');
  }
}

async function seedAtendimentos(
  clienteId: number,
  petId: number,
  servicoId: number,
) {
  const count = await prisma.aTENDIMENTOS.count({
    where: { ID_CLIENTE: clienteId, ID_PET: petId, ID_SERVICO: servicoId },
  });
  if (count === 0) {
    const atendimento = await prisma.aTENDIMENTOS.create({
      data: {
        ID_CLIENTE: clienteId,
        ID_PET: petId,
        ID_SERVICO: servicoId,
        VALOR_COBRADO: '79.90',
        TIPO: 'banho',
        NOTAS: 'Primeira visita',
      },
    });
    console.log('✅ ATENDIMENTOS created');
    return atendimento;
  } else {
    console.log('ℹ️ ATENDIMENTOS already exists for this relation, using first');
    return prisma.aTENDIMENTOS.findFirst({
      where: { ID_CLIENTE: clienteId, ID_PET: petId, ID_SERVICO: servicoId },
      orderBy: { ID_ATENDIMENTO: 'asc' },
    }) as any;
  }
}

async function seedAtendimentoImagens(atendimentoId: number) {
  const count = await prisma.aTENDIMENTO_IMAGENS.count({ where: { ID_ATENDIMENTO: atendimentoId } });
  if (count === 0) {
    await prisma.aTENDIMENTO_IMAGENS.createMany({
      data: [
        { ID_ATENDIMENTO: atendimentoId, CAMINHO_IMAGEM: '/uploads/atendimentos/1/foto1.jpg' },
      ],
    });
    console.log('✅ ATENDIMENTO_IMAGENS created');
  } else {
    console.log('ℹ️ ATENDIMENTO_IMAGENS already exist for this atendimento, skipping creation');
  }
}

async function main() {
  console.log('🔄 Seeding database (new schema)...');

  // Independent first
  const { byName: servicosByName } = await seedServicos();
  const { byName: clientesByName } = await seedClientes();
  await seedUsuarios();

  // Dependent
  const maria = clientesByName['Maria Silva'] || (await prisma.cLIENTES.findFirst({ orderBy: { ID_CLIENTE: 'asc' } }))!;
  const banho = servicosByName['Banho'] || (await prisma.sERVICOS.findFirst({ orderBy: { ID_SERVICO: 'asc' } }))!;

  const pets = await seedPets(maria.ID_CLIENTE);
  const pet = pets[0] || (await prisma.pETS.findFirst({ where: { ID_CLIENTE: maria.ID_CLIENTE }, orderBy: { ID_PET: 'asc' } }))!;

  await seedPacotes(maria.ID_CLIENTE, banho.ID_SERVICO);
  const atendimento = await seedAtendimentos(maria.ID_CLIENTE, pet.ID_PET, banho.ID_SERVICO);
  await seedAtendimentoImagens(atendimento.ID_ATENDIMENTO);

  console.log('🌟 Seeding finished (new schema)!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
