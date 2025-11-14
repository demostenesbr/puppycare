import { Test, TestingModule } from '@nestjs/testing';
import { AtendimentoImagensService } from './atendimento-imagens.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AtendimentoImagensService', () => {
  let service: AtendimentoImagensService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AtendimentoImagensService,
        {
          provide: PrismaService,
          useValue: {
            aTENDIMENTO_IMAGENS: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<AtendimentoImagensService>(AtendimentoImagensService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
