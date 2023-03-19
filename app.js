require('./config/mongoose');
const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors');
// const productRouter = require('./app/product/routes');
// const catalogtRouter = require('./app/product_v2/router');
const catalogRouterv3 = require('./app/product_v3/routes');
const catalogRouterv4 = require('./app/product_v4/routes');
const logger = require('morgan');



app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use('/public', express.static(path.join(__dirname, 'uploads')))
// app.use('/api/v1', productRouter);
// app.use('/api/v2', catalogtRouter);
app.use('/api/v3', catalogRouterv3);
app.use('/api/v4', catalogRouterv4);
app.use((req, res, next) => {
    res.status(404)
    res.send({
        status: 'NOK',
        message: 'Requested URL (' + req.originalUrl + ') Not found',
        code: "404"
    })
    next()
})
app.use(cors())


app.listen(3000, () => console.log('App running on: http://localhost:3000'));