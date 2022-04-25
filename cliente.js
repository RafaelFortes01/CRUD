const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const porta = 1000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(porta);

id = 2

let clientes = [
    {
        idCliente: 1,
        nomeCliente: 'Rafael',
        email: 'rafaellacerda.6941@aluno.saojudas.br'
    },
    {
        idCliente: 2,
        nomeCliente: 'Pedrinho',
        email: 'pedrinholoco@saojudas.br'
    }
]

app.get('/', function(req, res){
    res.send('Olá!')
});

app.get('/clientes', function(req, res){
    res.status(200).json(clientes);
});

app.post('/clientes', function(req, res) {
    const cliente = {
        id: (id += 1),
        nomeCliente: req.body.nomeCliente,
        email: req.body.email
    };
    clientes.push(cliente);
    res.status(201).json(cliente);
});

app.put('/clientes', function(req, res){
    clientes.forEach((cliente) => {
        if(cliente.idCliente === req.body.idCliente){
            (cliente.nomeCliente = req.body.nomeCliente),
            (cliente.email = req.body.email);
            
        }
    });
    res.status(200).end();
});

app.delete('/clientes', function(req, res){
    let indice = clientes.findIndex((obj) => obj.idCliente == req.body.idCliente);
    if(indice >= 0){
        clientes.splice(indice, 1);
        res.status(200).json(clientes);
    }else {
        res.status(204).end();
    }
}); 


