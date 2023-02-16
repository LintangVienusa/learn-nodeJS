const router = require('express').Router();

router.get('/', (req, res, next) =>{
    const {pages, total} = req.query
    res.send({
        status: "OK",
        message: "Welcome",
        pages,
        total
    }) 
})

router.get('/articles/:id', (req, res) => {
    res.send({
        id: req.params.id
    })
})

router.get('/articles/:id', (req, res) => {
    res.send({
        id: req.params.id, 
    })
})

router.get('/:category/:condition', (req, res) => {
    res.send({
        category: req.params.category,
        condition: req.params.condition,
    })
})

module.exports = router;