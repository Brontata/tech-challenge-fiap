const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tech Challenge Fiap - EJMG',
      version: '1.0.0',
      description: 'Documentação da API usando Swagger e Node!',
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Localhost'
      },
      {
        url: 'https://tech-challenge-node-latest.onrender.com',
        description: 'Production live server'
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        }
      }
    },
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        scheme: 'bearer',
        in: 'header',
      }
    },
  },
  apis: ['./src/routes/*.js'], 
};

// Documentação do Swagger
const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
