# Tech challenge 

O projeto tem como intuito a criação, edição, exclusão e visualização de posts baseados em uma aplicação escolar.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Instalação

Siga os passos abaixo para instalar e configurar o projeto localmente:

1. Clone o repositório:

   ```sh
   git clone git@github.com:Brontata/tech-challenge-fiap.git

2. Navegue até o diretório do projeto:

    cd seu-repositorio

3. Instale as dependências:

    npm install

4. Configure as variáveis de ambiente criando um arquivo .env baseado no arquivo .env.example.

5. Inicie o servidor:

    npm run start

6. Simular testes:

    npm run test

7. Rodar Swagger

    Inicie servidor e utilize rota /api-docs

## Uso

Exemplos de uso e como testar as funcionalidades do projeto:

1. Registo de usuário:

    POST /register
    Body: {
    "email": "exemplo@dominio.com",
    "password": "senha123",
    "role": "PROFESSOR"
    }

2. Login:

    POST /login
    Body: {
    "email": "exemplo@dominio.com",
    "password": "senha123"
    }

3. Funcionalidades:

    Apenas professores tem acesso a edição, criação e exclusão de posts. A role "Aluno" apenas tem acesso a visualização.

## Tecnologias Utilizadas

    Node.js
    Express
    PostgreSQL
    Prisma
    JSON Web Token (JWT)
    Swagger


