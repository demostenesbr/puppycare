import { Test, TestingModule } from '@nestjs/testing';
import { ServicosService } from './servicos.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ServicosService', () => {
  let service: ServicosService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServicosService,
        {
          provide: PrismaService,
          useValue: {
            sERVICOS: {
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

    service = module.get<ServicosService>(ServicosService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
