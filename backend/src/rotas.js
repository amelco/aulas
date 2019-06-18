const express = require('express');
const multer = require('multer');  // para acessar elementos POST atraves de req.body em multipart-formdata
const PostController = require('./controllers/PostController');
const uploadConfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);

// define as rotas e direciona pro controller
routes.post('/posts', upload.single('image'), PostController.store);  // upload.single() executa o metodo em config/upload.js. O controller armazena no mongoDB
routes.get('/posts', PostController.index); 

module.exports = routes;