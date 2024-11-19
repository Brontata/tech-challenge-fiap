# Tech Challenge 

O projeto tem como intuito a criação, edição, exclusão e visualização de posts baseados em uma aplicação escolar.

## Índice

- [Instalação](#instalação)
- [Testes unitários](#testes-unitários)
- [Deploy em produção](#deploy-em-produção)
- [Uso](#uso)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Instalação

Siga os passos abaixo para instalar e configurar o projeto localmente utilizando Docker:

1. Clone o repositório:

   ```sh
   git clone git@github.com:Brontata/tech-challenge-fiap.git

2. Navegue até o diretório do projeto:

    ```sh
    cd seu-repositorio

3. Configure um arquivo chamado .env com as seguintes variáveis na raiz do projeto (como no arquivo .env.example):

    ```sh
    DATABASE_URL="INSIRA AQUI O URL DO BANCO DE DADOS"
    JWT_SECRET="INSIRA AQUI A SECRET UTILIZADA PELO JWT"
    PORT=3333

4. Inicie o comando docker compose, caso queira que o terminal mostre os logs sempre, não passe o parâmetro '-d':

    ```sh
    docker compose up -d

5. Abra o contrato swagger para conferir todos endpoints e métodos da API

    <localhost:3333/api-docs>

## Testes unitários

Para rodar os testes unitários, execute o comando "npm run test" na raiz do projeto.
A cobertura mínima é de 30%

## Deploy em produção

Para realizar o deploy para ambiente produtivo devemos seguir o seguintes passos:

1. Criar uma branch feature/nome-da-feature

2. Desenvolver a feature desejada

3. Abrir um pull request para a branch develop

4. Caso a aplicação esteja de acordo com os padrões estabelecidos, nos encarregaremos de aceitar o pull request para realizar os testes em ambiente de desenvolvimento.

5. Após os testes em ambiente de desenvolvimento, encaminhamos um pull request da branch develop para main, que no momento de abertura verificará os testes unitários, e caso todos os testes passem e a cobertura seja de pelo menos 30% do código, o merge é liberado.

6. Com o merge feito, uma esteira se responsabilizará por criar uma imagem Docker a partir dos arquivos do projeto, subir para o DockerHub e comunicar o servidor que existe uma nova versão disponível, disparando um novo deploy em produção!

URL Produção: <https://tech-challenge-node-latest.onrender.com>

Contrato Swagger: <https://tech-challenge-node-latest.onrender.com/api-docs>

## Uso

Para utilizar a aplicação, consultar contrato [aqui](https://tech-challenge-node-latest.onrender.com/api-docs).

## Tecnologias Utilizadas

    Node.js
    Express
    PostgreSQL
    Prisma
    JSON Web Token (JWT)
    Swagger

