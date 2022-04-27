import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.categories.createMany({
    data: [
      {
        name: 'Pretação de Serviços',
        iconPath: '/icons/prestacaoServicos.png',
        status: 'Ativo',
        type: 'produto/serviço',
      },
      {
        name: 'Eletronicos',
        iconPath: '/icons/eletronicos.png',
        status: 'Ativo',
        type: 'produto/serviço',
      },
      {
        name: 'Animais de Estimação',
        iconPath: '/icons/pets.png',
        status: 'Ativo',
        type: 'produto/serviço',
      },
      {
        name: 'Vagas de Emprego',
        iconPath: '/icons/emprego.png',
        status: 'Ativo',
        type: 'produto/serviço',
      },
      {
        name: 'Vestuário e Beleza',
        iconPath: '/icons/beleza.png',
        status: 'Ativo',
        type: 'produto/serviço',
      },
      {
        name: 'Lazer e Esporte',
        iconPath: '/icons/esportes.png',
        status: 'Ativo',
        type: 'produto/serviço',
      },
      {
        name: 'Agronegócio',
        iconPath: '/icons/agronegocio.png',
        status: 'Ativo',
        type: 'produto/serviço',
      },
      {
        name: 'Industria e Comércio',
        iconPath: '/icons/industriaComercio.png',
        status: 'Ativo',
        type: 'produto/serviço',
      },
      {
        name: 'Artigos Infantils',
        iconPath: '/icons/infantil.png',
        status: 'Ativo',
        type: 'produto/serviço',
      },
      {
        name: 'Hobbies e Música',
        iconPath: '/icons/hobbies.png',
        status: 'Ativo',
        type: 'produto/serviço',
      },
      {
        name: 'Artigos para casa',
        iconPath: '/icons/casa.png',
        status: 'Ativo',
        type: 'produto/serviço',
      },
      {
        name: 'Outros',
        iconPath: '/icons/outros.png',
        status: 'Ativo',
        type: 'produto/serviço',
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
