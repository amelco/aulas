const express = require('express'); // importa o modulo express (servidor http)
const mongoose = require('mongoose') // importa modulo mongoose para acessar banco de dados mongo, configurado em 'mongo db atlas'
const path = require('path');
const cors = require('cors');   // permite que o react acesse o backend mesmo em dominios diferentes

const app = express();
// O app precisa ouvir os protocolos http o websocket simultaneamente para retornar as requisições em 'real-time'

// mantém acesso http
const server = require('http').Server(app);
// permite acesso ao protocolo websockets pelo server
const io = require('socket.io')(server);

// conecta ao servidor do banco de dados mongo através da string retirada do site 'mongo db atlas'
// mongoose.connect('mongodb+srv://semana:semana@cluster0-krc4r.mongodb.net/test?retryWrites=true&w=majority', {
//     useNewUrlParser: true,  // config para utilizar a string acima
// })
mongoose.connect('mongodb://localhost:27017/mongoDB', {
    useNewUrlParser: true,
});

// cria um middleware para ue todas as rotas tenham acesso a variavel io (websockets)
app.use((req, res, next) => {
    req.io = io;    // a partir daqui, todas as requests terão acesso a io

    next();     // garante que as outras rotas também serão executadas em seguida
})

app.use(cors());    // permite que 'qq aplicação' use esse backend

// rota para especificar os arquivos (static files) para o frontend
// acessa as imagens do caminho uploads/resized
app.use('/files', express.static(path.resolve(__dirname,  '..', 'uploads', 'resized')));

app.use(require('./rotas'));

server.listen(3333) //ouvir uma porta para acessar pelo navegador

