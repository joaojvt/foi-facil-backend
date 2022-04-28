import { IsNotEmpty, IsString } from 'class-validator';

enum CategoriasTypes {
  FAQ = 'FAQ',
  Parceiria = 'Parceria',
  Advertiment = 'Propaganda',
  ProductService = 'produto/serviço',
}

export class CreateCategoriaDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  iconPath: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  type: CategoriasTypes;
}
