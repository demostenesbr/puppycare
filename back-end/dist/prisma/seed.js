"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🔄 Seeding database...');
    const clientesData = [
        {
            id: 'cli_1',
            nome: 'Maria Silva',
            email: 'maria.silva@example.com',
            telefone: '11999990001',
            cpf: '12345678901',
            endereco_logradouro: 'Rua A',
            numero: '123',
            bairro: 'Centro',
            cidade: 'São Paulo',
            uf: 'SP',
            cep: '01000-000',
            latitude: -23.55052,
            longitude: -46.633308,
            whatsapp_opt_in: true,
        },
    ];
    for (const c of clientesData) {
        await prisma.clientes.upsert({
            where: { id: c.id },
            update: {
                nome: c.nome,
                email: c.email,
                telefone: c.telefone,
                cpf: c.cpf,
                endereco_logradouro: c.endereco_logradouro,
                numero: c.numero,
                bairro: c.bairro,
                cidade: c.cidade,
                uf: c.uf,
                cep: c.cep,
                latitude: c.latitude,
                longitude: c.longitude,
                whatsapp_opt_in: c.whatsapp_opt_in,
            },
            create: c,
        });
    }
    console.log('✅ Clientes seeded');
    const petsData = [
        {
            id: 'pet_1',
            cliente_id: 'cli_1',
            nome: 'Rex',
            especie: 'cachorro',
            raca: 'vira-lata',
            porte: 'médio',
            nascimento: new Date('2020-01-01'),
            observacoes: 'Paciente com medo de secador',
        },
    ];
    for (const p of petsData) {
        await prisma.pets.upsert({
            where: { id: p.id },
            update: {
                nome: p.nome,
                especie: p.especie,
                raca: p.raca || undefined,
                porte: p.porte || undefined,
                nascimento: p.nascimento || undefined,
                observacoes: p.observacoes || undefined,
                cliente_id: p.cliente_id,
            },
            create: p,
        });
    }
    console.log('✅ Pets seeded');
    const funcionariosData = [
        {
            id: 'func_1',
            nome: 'João Pereira',
            email: 'joao.pereira@puppycare.com',
            telefone: '11988880001',
            cargo: 'banhista',
            ativo: true,
        },
    ];
    for (const f of funcionariosData) {
        await prisma.funcionarios.upsert({
            where: { email: f.email },
            update: {
                nome: f.nome,
                telefone: f.telefone,
                cargo: f.cargo,
                ativo: f.ativo,
            },
            create: f,
        });
    }
    console.log('✅ Funcionarios seeded');
    const ordensData = [
        {
            id: 'ord_1',
            cliente_id: 'cli_1',
            pet_id: 'pet_1',
            tipo: 'banho',
            status: 'agendado',
            data_agendada: new Date(Date.now() + 24 * 60 * 60 * 1000),
            preco: '79.90',
            observacoes: 'Primeira visita',
        },
    ];
    for (const o of ordensData) {
        await prisma.ordensServicos.upsert({
            where: { id: o.id },
            update: {
                tipo: o.tipo,
                status: o.status,
                data_agendada: o.data_agendada,
                preco: o.preco,
                observacoes: o.observacoes || undefined,
                cliente_id: o.cliente_id,
                pet_id: o.pet_id,
            },
            create: o,
        });
    }
    console.log('✅ OrdensServicos seeded');
    const rotasData = [
        {
            id: 'rota_1',
            data: new Date(Date.now() + 24 * 60 * 60 * 1000),
            tipo: 'coleta',
            status: 'planejada',
            motorista: 'Carlos Souza',
            kilometragem_prevista: 12.5,
            tempo_previsto: 45,
        },
    ];
    for (const r of rotasData) {
        await prisma.rotas.upsert({
            where: { id: r.id },
            update: {
                data: r.data,
                tipo: r.tipo,
                status: r.status,
                motorista: r.motorista || undefined,
                kilometragem_prevista: r.kilometragem_prevista || undefined,
                tempo_previsto: r.tempo_previsto || undefined,
            },
            create: r,
        });
    }
    console.log('✅ Rotas seeded');
    const rotasParadasData = [
        {
            id: 'parada_1',
            rota_id: 'rota_1',
            ordem_id: 'ord_1',
            sequencia: 1,
            latitude: -23.55052,
            longitude: -46.633308,
            status: 'pendente',
        },
    ];
    for (const rp of rotasParadasData) {
        await prisma.rotasParadas.upsert({
            where: { id: rp.id },
            update: {
                rota_id: rp.rota_id,
                ordem_id: rp.ordem_id,
                sequencia: rp.sequencia,
                latitude: rp.latitude,
                longitude: rp.longitude,
                status: rp.status,
            },
            create: rp,
        });
    }
    console.log('✅ RotasParadas seeded');
    const mensagensData = [
        {
            id: 'msg_1',
            cliente_id: 'cli_1',
            canal: 'whatsapp',
            template: null,
            conteudo: 'Olá Maria, seu agendamento foi recebido.',
            status: 'pendente',
            meta_message_id: null,
            erro: null,
        },
    ];
    for (const m of mensagensData) {
        await prisma.mensagens.upsert({
            where: { id: m.id },
            update: {
                cliente_id: m.cliente_id,
                canal: m.canal,
                template: m.template || undefined,
                conteudo: m.conteudo,
                status: m.status,
                meta_message_id: m.meta_message_id || undefined,
                erro: m.erro || undefined,
            },
            create: m,
        });
    }
    console.log('✅ Mensagens seeded');
    const statusData = [
        {
            id: 'stat_1',
            ordem_id: 'ord_1',
            status: 'agendado',
            timestamp: new Date(),
        },
    ];
    for (const s of statusData) {
        await prisma.status.upsert({
            where: { id: s.id },
            update: {
                ordem_id: s.ordem_id,
                status: s.status,
                timestamp: s.timestamp,
            },
            create: s,
        });
    }
    console.log('✅ Status seeded');
    console.log('🌟 Seeding finished!');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map