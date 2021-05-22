const multer = require('multer');

//extensions possibles des fichiers images
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif'
};

//taille maximum de l image téléchargé par user
const maxSize = 1 * 1024 * 1024 //1MB

//creation d un objet de configuration 
const storage = multer.diskStorage({ //methode qui enregistre sur le disque 
    destination: (req, file, callback) => { //emplacement où enregistrer fichier
    callback(null, 'images');
    },
    filename: (req, file, callback) => { //creation du nouveau nom de fichier d image pour multer
        const name = file.originalname.split(' ').join('_').split('.')[0]; //on enleve les espaces
        console.log(name)
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);//nom de fichier suffisamment unique
    },
})

module.exports = multer({
    storage: storage, 
    limits: { 
        fileSize: maxSize 
    }
}).single('avatar');