const mongooseToSwagger = require('mongoose-to-swagger');
//const EsquemaTarefa = require('../src/models/tarefa.js');
//const EsquemaUsuario = require('../src/models/usuario.js');
const swaggerAutogen = require('swagger-autogen')({
    openapi: '3.0.0',
    language: 'pt-BR',
});

let outputFile = './swagger_output.json';
let endpointsFiles = ['../index.js'];

let doc = {
    info: {
        version: "1.0.0",
        title: "API da Biblioteca DNC",
        description: "Documentação da API da Biblioteca DNC."
    },
    servers: [
        {
            url: "http://localhost:3000/",
            description: "Servidor localhost."
        },
        {
            url: "https://dnc-board-tasks-back.vercel.app/",
            description: "Servidor de produção."
        }
    ],
    consumes: ['application/json'],
    produces: ['application/json'],
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log("Documentação do Swagger gerada encontra-se no arquivo em: " + outputFile);
    if (process.env.NODE_ENV !== 'production') {
        require("../index.js");
    }
})