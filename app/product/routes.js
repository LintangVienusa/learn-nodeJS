const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'})
const fs = require('fs');
const path = require('path');
const connection = require('../../config/mysql');

router.get('/product', (req, res) =>{
    connection.connect();
    connection.query({
        sql: 'SELECT * FROM tb_product',
    }, (error, result) => {
        if(error) {
            res.send({
                status: 'Failed',
                response: 'Failed to fetch data'
            })
        }else{
            res.send({
                status: 'OK',
                response: result
            })
        }
    })
    connection.end();
})

router.get('/product/:id', (req, res) => {
    // connection.connect();
    connection.query({
        sql: 'SELECT * FROM tb_product WHERE id = ?',
        values: [req.params.id]
    }, (error, result) => {
        if(error) {
            res.send({
                status: 'Failed',
                response: 'Failed to fetch data'
            })
        }else{
            res.send({
                status: 'OK',
                response: result
            })
        }
    })
    // connection.end();
})

router.post ('/articles/', upload.single('image'), (req, res) => {
    // const { name, price, stock, status } = req.body;
    const { image }  = req.file;
    const { name, price, stock, status } = req.body;
    if (image) {
        const target = path.join(__dirname, 'uploads', image.originalname);
        fs.renameSync(image.path, target);
        res.json({
            name,
            price, 
            stock,
            status,
            image
        });

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