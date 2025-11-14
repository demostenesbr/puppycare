import { Test, TestingModule } from '@nestjs/testing';
import { AtendimentoImagensController } from './atendimento-imagens.controller';
import { AtendimentoImagensService } from './atendimento-imagens.service';

describe('AtendimentoImagensController', () => {
  let controller: AtendimentoImagensController;
  let service: AtendimentoImagensService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtendimentoImagensController],
      providers: [
        {
          provide: AtendimentoImagensService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AtendimentoImagensController>(AtendimentoImagensController);
    service = module.get<AtendimentoImagensService>(AtendimentoImagensService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
