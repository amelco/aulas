const express = require('express'); // importa o modulo express (servidor http)
const mongoose = require('mongoose') // importa modulo mongoose para acessar banco de dados mongo, configurado em 'mongo db atlas'

const app = express();

// conecta ao servidor do banco de dados mongo através da string retirada do site 'mongo db atlas'
// mongoose.connect('mongodb+srv://semana:semana@cluster0-krc4r.mongodb.net/test?retryWrites=true&w=majority', {
//     useNewUrlParser: true,  // config para utilizar a string acima
// })
mongoose.connect('mongodb://localhost:27017/mongoDB', {
    useNewUrlParser: true,
});

app.use(require('./rotas'));

app.listen(3333) //ouvir uma porta para acessar pelo navegador

