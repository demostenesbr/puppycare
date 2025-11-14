import { Test, TestingModule } from '@nestjs/testing';
import { ServicosController } from './servicos.controller';
import { ServicosService } from './servicos.service';

describe('ServicosController', () => {
  let controller: ServicosController;
  let service: ServicosService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicosController],
      providers: [
        {
          provide: ServicosService,
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

    controller = module.get<ServicosController>(ServicosController);
    service = module.get<ServicosService>(ServicosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
