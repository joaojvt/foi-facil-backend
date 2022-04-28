import { Module } from '@nestjs/common';
import { CategoriasService } from './Categorias.service';
import { CategoriasController } from './Categorias.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [CategoriasController],
  providers: [CategoriasService, PrismaService],
})
export class CategoriasModule {}
