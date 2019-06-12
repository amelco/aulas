const express = require('express'); // importa o modulo express
const mongoose = require('mongoose') // importa modulo mongoose para acessar banco de dados mongo, configurado em 'mongo db atlas'

const app = express();  // cria a aplicaçao. funçao express cria um 'servidor'

// conecta ao servidor do banco de dados mongo através da string retirada do site 'mongo db atlas'
mongoose.connect('mongodb+srv://semana:semana@cluster0-krc4r.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,  // config para utilizar a string acima
})

app.use(require('./rotas'));

app.listen(3333) //ouvir uma porta para acessar pelo navegador

