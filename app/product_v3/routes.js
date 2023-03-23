const route  = require('express').Router();
const multer = require('multer');
const upload = multer({dest: '../../uploads' });
const catalogController = require('./controller');

route.get('/catalogs', catalogController.index);
route.get('/catalogs/:id', catalogController.getDetail);
route.post('/catalogs', upload.single('image'), catalogController.storeProduct);
route.put('/catalogs/:id', catalogController.updateProduct);

module.exports = route
