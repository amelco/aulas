// regras de negócio, ou o que fazer nas rotas

const sharp = require('sharp');     // manipula imagens
const Post = require('../models/Post');
const path = require('path');   // unifica syntax de caminhos de SOs diferentes
const fs = require('fs');   // manipula arquivos

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
        console.log(req.file);
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;   // pega o atributo filename de req.body e armazena na variavel de nome image

        const  [name, ext] = image.split('.');
        const fileName = `${name}.jpg`;

        // return res.json(req.file)
        // faz o redimensionamento da imagem
        await sharp(req.file.path)
            .resize(500)    // redimensiona para 500px de altura ou largura
            .jpeg({ quality: 70 })  // transforma pra jpg c/ 70% qualidade
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            )
        
        // deleta imagem
        fs.unlinkSync(req.file.path);

        // utiliza-se o await para nao bloquear as execuções (non-blocking)
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });

        // emite para todos os usuário que estão conectados na aplicação
        req.io.emit('post', post);  // envia pro front-end mensagem de nome post
        
        return res.json(post)
    }
};