import { Injectable } from '@nestjs/common';
import { Categorias } from '@prisma/client';

import { PrismaService } from '../prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoriaDto) {
    return 'This action adds a new category';
  }

  findAll(): Promise<Categorias[]> {
    return this.prisma.categorias.findMany({
      where: {
        status: 'Ativo',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoriaDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
