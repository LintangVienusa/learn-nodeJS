const router = require('express').Router();

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

router.post ('/articles/', (req, res) => {
    res.json(req, body)
})

router.get('/articles/:id', (req, res) => {
    res.send({
        id: req.params.id, 
        code: "200"
    })
})

router.get('/:category/:condition', (req, res) => {
    res.send({
        category: req.params.category,
        condition: req.params.condition,
        code: "200"
    })
})

module.exports = router;