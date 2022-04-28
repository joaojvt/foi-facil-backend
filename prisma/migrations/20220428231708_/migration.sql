-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidadee" VARCHAR(255) NOT NULL,
    "estado" VARCHAR(2) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "cargo" VARCHAR(50) NOT NULL,
    "apelido" VARCHAR(50),
    "senha" TEXT NOT NULL,
    "userRoleId" INTEGER NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Telefone" (
    "id" SERIAL NOT NULL,
    "telefone" TEXT NOT NULL,
    "userId" INTEGER,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clienteId" INTEGER,

    CONSTRAINT "Telefone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contato" (
    "id" SERIAL NOT NULL,
    "telefone" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parceirosId" INTEGER,

    CONSTRAINT "Contato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "rotine" VARCHAR(10) NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parceiros" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "parceritoTipo" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "nomeFantasia" TEXT NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "inscrisaoEstadual" VARCHAR(20) NOT NULL,
    "incricaoMunicial" VARCHAR(20) NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidadee" VARCHAR(100) NOT NULL,
    "estado" VARCHAR(2) NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Parceiros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Financeiro" (
    "id" SERIAL NOT NULL,
    "cashier" VARCHAR(255) NOT NULL,
    "tipoReceitaDespesa" VARCHAR(5) NOT NULL,
    "nome" TEXT NOT NULL,
    "tipoBaixa" VARCHAR(20) NOT NULL,
    "Reversal" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Financeiro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacilitadorPagamenteo" (
    "id" SERIAL NOT NULL,
    "ParceirosId" INTEGER NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "clienteId" INTEGER,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FacilitadorPagamenteo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "tipoCategoria" VARCHAR(25) NOT NULL,
    "caminhoIcone" VARCHAR(255) NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategorias" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "caminhoIcone" VARCHAR(255) NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubCategorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" VARCHAR(10) NOT NULL,
    "caminho" VARCHAR(255) NOT NULL,
    "periodicidade" VARCHAR(50) NOT NULL,
    "limiteAnuncios" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Planos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Destaques" (
    "id" SERIAL NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "subCategoriaId" INTEGER NOT NULL,
    "valor" DECIMAL(10,2),
    "posicao" VARCHAR(50) NOT NULL,
    "periodo" VARCHAR(20) NOT NULL,
    "forma" VARCHAR(50) NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Destaques_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "vemdedorId" INTEGER NOT NULL,
    "tipoCliente" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "nomeFantasia" TEXT NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "inscrisaoEstadual" VARCHAR(20) NOT NULL,
    "incricaoMunicial" VARCHAR(20) NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidadee" VARCHAR(100) NOT NULL,
    "estado" VARCHAR(2) NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anuncios" (
    "id" SERIAL NOT NULL,
    "tipoAnuncio" TEXT NOT NULL,
    "valor" DECIMAL(10,2),
    "posicao" VARCHAR(50) NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Anuncios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FAQ" (
    "id" SERIAL NOT NULL,
    "pergunta" VARCHAR(255) NOT NULL,
    "resposta" VARCHAR(255) NOT NULL,
    "posicao" VARCHAR(50) NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnunciosBotao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "subCategoriaId" INTEGER NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnunciosBotao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cupons" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "periodo" VARCHAR(20) NOT NULL,
    "tipo" VARCHAR(50) NOT NULL,
    "acumulativo" BOOLEAN NOT NULL,
    "multiplo" BOOLEAN NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cupons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnunciosInclusao" (
    "id" SERIAL NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "posicao" VARCHAR(50) NOT NULL,
    "periodo" VARCHAR(20) NOT NULL,
    "forma" VARCHAR(50) NOT NULL,
    "pecaPath" TEXT NOT NULL,
    "pagamento" VARCHAR(20) NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnunciosInclusao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userRoleId_fkey" FOREIGN KEY ("userRoleId") REFERENCES "UserRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefone" ADD CONSTRAINT "Telefone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefone" ADD CONSTRAINT "Telefone_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_parceirosId_fkey" FOREIGN KEY ("parceirosId") REFERENCES "Parceiros"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parceiros" ADD CONSTRAINT "Parceiros_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitadorPagamenteo" ADD CONSTRAINT "FacilitadorPagamenteo_ParceirosId_fkey" FOREIGN KEY ("ParceirosId") REFERENCES "Parceiros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategorias" ADD CONSTRAINT "SubCategorias_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Planos" ADD CONSTRAINT "Planos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Destaques" ADD CONSTRAINT "Destaques_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Destaques" ADD CONSTRAINT "Destaques_subCategoriaId_fkey" FOREIGN KEY ("subCategoriaId") REFERENCES "SubCategorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_vemdedorId_fkey" FOREIGN KEY ("vemdedorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnunciosBotao" ADD CONSTRAINT "AnunciosBotao_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnunciosBotao" ADD CONSTRAINT "AnunciosBotao_subCategoriaId_fkey" FOREIGN KEY ("subCategoriaId") REFERENCES "SubCategorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnunciosInclusao" ADD CONSTRAINT "AnunciosInclusao_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
