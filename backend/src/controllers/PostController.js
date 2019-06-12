const Post = require('../models/Post');

// exporta um objeto que vai ter os métodos do controller
module.exports = {
    // lista posts
    async index(req, res) {

    },

    // armazena posts
    async store(req, res) {
        // console.log(req.body);
        // console.log(req.file);
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

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