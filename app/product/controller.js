const connection = require('../../config/mysql');

const index = (req, res) =>{
    connection.query({
        sql: 'SELECT * FROM tb_product',
    }, _response(res));
}

const detailProduct = (req, res) => {
    connection.query({
        sql: 'SELECT * FROM tb_product WHERE id = ?',
        values: [req.params.id]
    }, _response(res));
}

const storeProduct = (req, res) => {
    const [name, price, stock, status] = req.body;
    connection.query({
        sql: 'INSERT INTO tb_product (name, price, stock, status) VALUES (?, ?, ?, ?)',
        values: [name, price, stock, status]
    }, _response(res));
}



const _response = (res) => {
    return (error, result) => {
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
    }
}

module.exports = {
    index,
    detailProduct,
    storeProduct
}