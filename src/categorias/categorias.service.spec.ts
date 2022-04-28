import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasService } from './categorias.service';
import { PrismaService } from '../prisma.service';

describe('CategoriasService', () => {
  let service: CategoriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriasService, PrismaService],
    }).compile();

    service = module.get<CategoriasService>(CategoriasService);
  });

  it('should return Catergories list', async () => {
    const Categorias = await service.findAll();
    expect(Categorias.length).toBeGreaterThan(0);
  });
});
