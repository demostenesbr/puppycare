import { Test, TestingModule } from '@nestjs/testing';
import { AtendimentosController } from './atendimentos.controller';
import { AtendimentosService } from './atendimentos.service';

describe('AtendimentosController', () => {
  let controller: AtendimentosController;
  let service: AtendimentosService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtendimentosController],
      providers: [
        {
          provide: AtendimentosService,
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

    controller = module.get<AtendimentosController>(AtendimentosController);
    service = module.get<AtendimentosService>(AtendimentosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
