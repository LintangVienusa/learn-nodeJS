const express = require('express');
const path = require('path')
const log = require('./middleware/logger');
const app = express();
const router = require('./routes');


app.use(log)
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'uploads')))
app.use(router)
app.use((req, res, next) => {
    res.status(404)
    res.send({
        status: 'NOK',
        message: 'Requested URL (' + req.originalUrl + ') Not found',
        code: "404"
    })
})


app.listen(3000, () => console.log('App running on: http://localhost:3000'));