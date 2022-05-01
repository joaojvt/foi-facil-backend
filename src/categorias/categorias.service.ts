import { Injectable } from '@nestjs/common';
import { Categorias } from '@prisma/client';

import { PrismaService } from '../prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  create(createCategoriaDto: CreateCategoriaDto) {
    return this.prisma.categorias.create({
      data: createCategoriaDto,
    });
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

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.prisma.categorias.update({
      data: updateCategoriaDto,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.categorias.update({
      data: {
        status: 'INATIVO',
      },
      where: {
        id,
      },
    });
  }
}
