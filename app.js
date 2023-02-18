const express = require('express');
const log = require('./middleware/logger');
const app = express()
const router = require('./routes');


app.use(log)
app.use(router)
app.use((req, res, next) => {
    res.send({
        status: 'NOK',
        message: 'Requested URL (' + req.originalUrl + ') Not found',
        code: "404"
    })
})


app.listen(3000, () => console.log('App running on: http://localhost:3000'));