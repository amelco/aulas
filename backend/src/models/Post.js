// Essa arquivo funciona como uma tabela do BD

const mongoose = require('mongoose');

// mongoose.Schema tem metodos como create() e find() para criar e procurar no BD
const PostSchema = mongoose.Schema({
    // nome da coluna: tipo
    author: String,
    place: String, 
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,   // cria campo para armazenar datas de criação e alteração
});

module.exports = mongoose.model('Post', PostSchema);