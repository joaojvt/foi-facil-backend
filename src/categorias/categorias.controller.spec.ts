import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { PrismaService } from '../prisma.service';
import { CategoriasTypes } from './dto/create-categoria.dto';

describe('CategoriasController', () => {
  let controller: CategoriasController;
  let prisma: PrismaService;
  let categoriaId: string;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriasController],
      providers: [CategoriasService, PrismaService],
    }).compile();

    controller = module.get<CategoriasController>(CategoriasController);
    prisma = module.get<PrismaService>(PrismaService);
    const { id } = await prisma.categorias.create({
      data: {
        nome: 'Teste Categoria',
        caminhoIcone: '/icons/teste.png',
        status: 'Ativo',
        tipoCategoria: CategoriasTypes.ProductService,
      },
    });
    categoriaId = id.toString();
  });

  afterEach(async () => {
    await prisma.categorias.deleteMany();
  });

  it('should return Catergories list', async () => {
    const categorias = await controller.findAll();
    expect(categorias.length).toBe(1);
  });

  it('deve criar uma categoria nova', async () => {
    const categoria = {
      nome: 'Teste e Testando',
      caminhoIcone: '/icons/teste.png',
      status: 'Ativo',
      tipoCategoria: CategoriasTypes.ProductService,
    };
    const responseCriar = await controller.create(categoria);
    categoriaId = responseCriar.id.toString();
    expect(responseCriar.nome).toBe(categoria.nome);
  });

  it('should return the first categorie', async () => {
    const categoria = await controller.findOne(categoriaId);
    expect(categoria.nome).toBe('Teste Categoria');
  });

  it('should update categorie', async () => {
    const categoriaUpdate = {
      nome: 'Teste e Testando 2',
      caminhoIcone: '/icons/teste.png',
      status: 'Ativo',
      tipoCategoria: CategoriasTypes.ProductService,
    };
    await controller.update(categoriaId, categoriaUpdate);
    const categoriaUpdated = await controller.findOne(categoriaId);
    expect(categoriaUpdated.nome).toBe('Teste e Testando 2');
  });

  it('should delete categoriea', async () => {
    await controller.remove(categoriaId);
    const categoria = await controller.findOne(categoriaId);
    expect(categoria.status).toBe('Inativo');
  });
});
