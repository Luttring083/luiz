require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose')
const bodyParser = require('body-parser');
//criando o servidor web
const app = express();
 
//configurando o servidor web
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));





// conectando os cotrollers ao servidor web
app.use('/produtos', require ('./controllers/produto_controller'));



console.log('conectando ao banco de dados...');
mongoose.connect(process.env.URL_BANCO_DE_DADOS).then (() => {
    console.log('Banco de dados conectado..');
    app.listen(parseInt(process.env.PORTA_SERVIDOR), () => {
        console.log(`O Servidor Está No Ar em http://localhost:${process.env.PORTA_SERVIDOR}`);
   }); 
});
