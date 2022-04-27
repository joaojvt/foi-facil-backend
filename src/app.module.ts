import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { PrismaService } from './prisma.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    CategoriesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'static'),
      renderPath: '/*',
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {}
