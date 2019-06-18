// arquivo de configurações de upload
// basicamente diz onde o arquivo da imagem vai ser salvo
const multer = require('multer'); // para acessar elementos POST atraves de req.body em multipart-formdata
const path = require('path');


module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),  // seta o caminho em que o arquivo será salvo
        filename: function(req, file, callback) {   // seta o nome do arquivo
            callback(null, file.originalname);
        }
    })
};