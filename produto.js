const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const porta = 2000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(porta);

id = 2

let produtos = [
    {
        idProduto: 1,
        nomeProduto: 'Mouse',
        precoUnitario: 499
    },
    {
        idProduto: 2,
        nomeProduto: 'Teclado',
        precoUnitario: 699
    }
]
