const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: '../../uploads'})
const productController = require('./controller');

router.get('/product', productController.index); 
router.get('/product/:id', productController.detailProduct);
router.post('/product', upload.single('image_path'), productController.storeProduct);
router.put('/product/:id', upload.single('image_path'),  productController.updateProduct);
router.delete('/product/:id', upload.single('image'),  productController.deleteProduct);

module.exports = router;