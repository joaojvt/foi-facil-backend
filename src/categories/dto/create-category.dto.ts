import { IsNotEmpty, IsString } from 'class-validator';

enum CategoriesTypes {
  FAQ = 'FAQ',
  Parceiria = 'Parceria',
  Advertiment = 'Propaganda',
  ProductService = 'produto/serviço',
}

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  iconPath: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  type: CategoriesTypes;
}
