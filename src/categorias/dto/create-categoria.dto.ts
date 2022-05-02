import { IsNotEmpty, IsString } from 'class-validator';

export enum CategoriasTypes {
  FAQ = 'FAQ',
  Parceiria = 'Parceria',
  Advertiment = 'Propaganda',
  ProductService = 'produto/serviço',
}

export class CreateCategoriaDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  caminhoIcone: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  tipoCategoria: CategoriasTypes;
}
