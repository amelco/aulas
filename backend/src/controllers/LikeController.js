const Post = require('../models/Post');

// exporta um objeto que vai ter os métodos do controller
module.exports = {
    // armazena (ou cria) um like
    async store(req, res) {
        const post = await Post.findById(req.params.id);

        post.likes += 1;

        await post.save();

        return res.json(post)
    }
};