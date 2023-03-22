const { ObjectId } = require('mongodb')
const db = require('../../config/mongodb'); 
const path = require('path');
const fs = require('fs');

const index =  (req, res) => {
    db.collection('catalogs').find()
        .toArray()
        .then(res.set('Access-Control-Allow-Origin', '*'))
        .then(result => res.send(result))
        .catch(error => res.send(error))
}

const getDetail =  (req, res) => {
    const {id}= req.params;
    console.log(id);
    db.collection('catalogs').findOne({_id: new ObjectId(id)})
    .then(res.set('Access-Control-Allow-Origin', '*'))
    .then(result => res.send(result))
    .catch(error => res.send )
}

const storeProduct = (req, res) => {
    const {name, price, stock, isDisplay} = req.body;
    const image  = req.file;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        db.collection('catalogs').insertOne({name, price, stock, isDisplay, image_path: `http://localhost:3000/public/${image.originalname}`})
        .then(res.set('Access-Control-Allow-Origin', '*'))
        .then(result => res.send(result))
        .catch(error => res.send(error))
    }
}

const updateProduct = (req, res) => {
    const {id} = req.params;
    const {name, price, stock, isDisplay} = req.body;
    db.collection('catalogs').updateOne({_id: new ObjectId(id)}, {$set: { stock: stock }})
    .then(res.set('Access-Control-Allow-Origin', '*'))
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

module.exports = {
    index, 
    getDetail,
    storeProduct,
    updateProduct
};