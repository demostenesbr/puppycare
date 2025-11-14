import { Test, TestingModule } from '@nestjs/testing';
import { PacotesController } from './pacotes.controller';
import { PacotesService } from './pacotes.service';

describe('PacotesController', () => {
  let controller: PacotesController;
  let service: PacotesService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacotesController],
      providers: [
        {
          provide: PacotesService,
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

    controller = module.get<PacotesController>(PacotesController);
    service = module.get<PacotesService>(PacotesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
