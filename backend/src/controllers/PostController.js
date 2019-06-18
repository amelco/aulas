// regras de negócio, ou o que fazer nas rotas

const Post = require('../models/Post');

// Exporta um objeto que vai ter os métodos do controller
// Os métodos são middlewares do express, ou seja, tem uma requisição (req) e
//   uma resposta (res).
module.exports = {
    // lista posts
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');
        
        return res.json(posts);
    },

    // armazena posts
    async store(req, res) {
        // multer passa body e file na request
        // console.log(req.body);
        // console.log(req.file);
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;   // pega o atributo filename de req.body e armazena na variavel de nome image

        // utiliza-se o await para nao bloquear as execuções (non-blocking)
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image,
        });

        return res.json(post)
    }
};