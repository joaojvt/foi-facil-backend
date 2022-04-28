import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.categorias.createMany({
    data: [
      {
        nome: 'Pretação de Serviços',
        caminhoIcone: '/icons/prestacaoServicos.png',
        status: 'Ativo',
        tipoCategoria: 'produto/serviço',
      },
      {
        nome: 'Eletronicos',
        caminhoIcone: '/icons/eletronicos.png',
        status: 'Ativo',
        tipoCategoria: 'produto/serviço',
      },
      {
        nome: 'Animais de Estimação',
        caminhoIcone: '/icons/pets.png',
        status: 'Ativo',
        tipoCategoria: 'produto/serviço',
      },
      {
        nome: 'Vagas de Emprego',
        caminhoIcone: '/icons/emprego.png',
        status: 'Ativo',
        tipoCategoria: 'produto/serviço',
      },
      {
        nome: 'Vestuário e Beleza',
        caminhoIcone: '/icons/beleza.png',
        status: 'Ativo',
        tipoCategoria: 'produto/serviço',
      },
      {
        nome: 'Lazer e Esporte',
        caminhoIcone: '/icons/esportes.png',
        status: 'Ativo',
        tipoCategoria: 'produto/serviço',
      },
      {
        nome: 'Agronegócio',
        caminhoIcone: '/icons/agronegocio.png',
        status: 'Ativo',
        tipoCategoria: 'produto/serviço',
      },
      {
        nome: 'Industria e Comércio',
        caminhoIcone: '/icons/industriaComercio.png',
        status: 'Ativo',
        tipoCategoria: 'produto/serviço',
      },
      {
        nome: 'Artigos Infantils',
        caminhoIcone: '/icons/infantil.png',
        status: 'Ativo',
        tipoCategoria: 'produto/serviço',
      },
      {
        nome: 'Hobbies e Música',
        caminhoIcone: '/icons/hobbies.png',
        status: 'Ativo',
        tipoCategoria: 'produto/serviço',
      },
      {
        nome: 'Artigos para casa',
        caminhoIcone: '/icons/casa.png',
        status: 'Ativo',
        tipoCategoria: 'produto/serviço',
      },
      {
        nome: 'Outros',
        caminhoIcone: '/icons/outros.png',
        status: 'Ativo',
        tipoCategoria: 'produto/serviço',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
