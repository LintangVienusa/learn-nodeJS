const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'})
const fs = require('fs');
const path = require('path');
const connection = require('../../config/mysql');
const productController = require('./controller');

router.get('/product', productController.index); 
router.get('/product/:id', productController.detailProduct);

router.post ('/articles/', upload.single('image'), (req, res) => {
    // const { name, price, stock, status } = req.body;
    const { name, price, stock, status } = req.body;
    const { image }  = req.file;
    if (image) {
        const target = path.join(__dirname, 'uploads', image.originalname);
        fs.renameSync(image.path, target);
        res.sendFile(target);
    } 
}) 


router.get('/:category/:condition', (req, res) => {
    res.send({
        category: req.params.category,
        condition: req.params.condition,
        code: "200"
    })
})


module.exports = router;