const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'})
const fs = require('fs');
const path = require('path');
const image = 

router.get('/', (req, res, next) =>{
    const {pages, total} = req.query
    res.send({
        status: "OK",
        message: "Welcome",
        pages,
        total,
        code: "200"
    }) 
})

router.get('/articles/:id', (req, res) => {
    res.send({
        id: req.params.id,
        code: "200"
    })
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