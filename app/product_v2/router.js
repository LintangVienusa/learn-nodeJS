const router = require('express').Router();
const Catalog  = require('./model');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const upload = multer({dest: '../../uploads'})

router.post('/catalog', upload.single('image'), async(req, res) => {
    const  { id, name, stock, is_display } = req.body
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try {
            await Catalog.sync();
            const result = Catalog.create({ id, name, stock, is_display, image_path: `http://localhost:3000/public/${image.originalname}` })
            res.send(result);
        }catch(e) {
            res.send(e)
        }
    }
})


router.get('/catalog', async(req, res) => {
    try {
        await Catalog.sync();
        const result = Catalog.findAll({raw: true})
        _response(result)
        console.log(JSON.stringify(result))
    }catch(e) {
        res.send(e)
    }
}) 
// , ()=> {
    // console.log("test");
    // try {
    //     await Catalog.sync();
    //     const result = Catalog.findAll()
    //     res.send(result)
    // }catch(e) {
    //     res.send(e)
    // }
// }

module.exports = router;