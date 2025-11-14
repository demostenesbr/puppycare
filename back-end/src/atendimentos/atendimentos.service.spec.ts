import { Test, TestingModule } from '@nestjs/testing';
import { AtendimentosService } from './atendimentos.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AtendimentosService', () => {
  let service: AtendimentosService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AtendimentosService,
        {
          provide: PrismaService,
          useValue: {
            aTENDIMENTOS: {
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

    service = module.get<AtendimentosService>(AtendimentosService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
