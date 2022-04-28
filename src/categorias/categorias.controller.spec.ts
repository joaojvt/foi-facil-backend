import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { PrismaService } from '../prisma.service';

describe('CategoriasController', () => {
  let controller: CategoriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriasController],
      providers: [CategoriasService, PrismaService],
    }).compile();

    controller = module.get<CategoriasController>(CategoriasController);
  });

  it('Should return a list of categorias', async () => {
    const categorias = await controller.findAll();
    expect(categorias.length).toBeGreaterThan(0);
  });
});
