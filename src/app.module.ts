import { Module } from '@nestjs/common';
import { CategoriasModule } from './categorias/categorias.module';
import { PrismaService } from './prisma.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
@Module({
  controllers: [AppController],
  imports: [
    CategoriasModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'static'),
      renderPath: '/*',
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {}
