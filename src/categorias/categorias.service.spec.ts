import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasService } from './categorias.service';
import { PrismaService } from '../prisma.service';
import { CategoriasTypes } from './dto/create-categoria.dto';

describe('CategoriasService', () => {
  let service: CategoriasService;
  let prisma: PrismaService;
  let categoriaId: number;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriasService, PrismaService],
    }).compile();

    service = module.get<CategoriasService>(CategoriasService);
    prisma = module.get<PrismaService>(PrismaService);
    const { id } = await prisma.categorias.create({
      data: {
        nome: 'Teste Categoria',
        caminhoIcone: '/icons/teste.png',
        status: 'Ativo',
        tipoCategoria: CategoriasTypes.ProductService,
      },
    });
    categoriaId = id;
  });

  afterEach(async () => {
    await prisma.categorias.deleteMany();
  });

  it('should return Catergories list', async () => {
    const categorias = await service.findAll();
    expect(categorias.length).toBe(1);
  });

  it('should create a new categorie', async () => {
    const categoria = {
      nome: 'Teste e Testando',
      caminhoIcone: '/icons/teste.png',
      status: 'Ativo',
      tipoCategoria: CategoriasTypes.ProductService,
    };
    const responseCriar = await service.create(categoria);
    expect(responseCriar.nome).toBe(categoria.nome);
  });

  it('should return the first categorie', async () => {
    const categoria = await service.findOne(categoriaId);
    expect(categoria.nome).toBe('Teste Categoria');
  });

  it('should update categorie', async () => {
    const categoriaUpdate = {
      nome: 'Teste e Testando 2',
      caminhoIcone: '/icons/teste.png',
      status: 'Ativo',
      tipoCategoria: CategoriasTypes.ProductService,
    };
    await service.update(categoriaId, categoriaUpdate);
    const categoriaUpdated = await service.findOne(categoriaId);
    expect(categoriaUpdated.nome).toBe('Teste e Testando 2');
  });

  it('should delete categoriea', async () => {
    await service.remove(categoriaId);
    const categoria = await service.findOne(categoriaId);
    expect(categoria.status).toBe('Inativo');
  });
});
