const route  = require('express').Router();
const multer = require('multer');
const upload = multer({dest: '../../uploads' });
const catalogs = require('./model');
const fs = require('fs');
const path = require('path');

route.post('/catalogs', upload.single('image'), (req, res) => {
    const {productName, price, stock, isDisplay} = req.body;
    const image  = req.file;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        catalogs.create({productName, price, stock, isDisplay, image_path: `http://localhost:3000/public/${image.originalname}`})
        .then(result => res.send(result))
        .catch(error => res.send(error))
    }
});

route.get('/catalogs', (req, res) => {
    catalogs.find()
        .then(result => res.send(result))
        .catch(error => res.send(error))
})

module.exports = route
