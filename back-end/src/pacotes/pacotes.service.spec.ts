import { Test, TestingModule } from '@nestjs/testing';
import { PacotesService } from './pacotes.service';
import { PrismaService } from '../prisma/prisma.service';

describe('PacotesService', () => {
  let service: PacotesService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PacotesService,
        {
          provide: PrismaService,
          useValue: {
            pACOTES: {
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

    service = module.get<PacotesService>(PacotesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
