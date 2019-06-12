const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
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
    timestamps: true,   // Armazena no BD datas de criação e alteração
});

module.exports = mongoose.model('Post', PostSchema);