const connection = require('../../config/mysql');
const path = require('path');
const fs = require('fs');

const index = (req, res) =>{
    const { search } = req.query;
    let exec = {};
    if(search) {
        exec = {
            sql: 'SELECT * FROM tb_product WHERE name LIKE ?',
            values: [`%${search}%`]
        }
    }else{
        exec = {
            sql: 'SELECT * FROM tb_product'
        }
    }
    connection.query(exec, _response(res));
}

const detailProduct = (req, res) => {
    connection.query({
        sql: 'SELECT * FROM tb_product WHERE id = ?',
        values: [req.params.id]
    }, _response(res));
}

const storeProduct = (req, res, error) => {
    const {id, name, price, stock, status} = req.body;
    const image  = req.file;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        connection.query({
            sql: 'INSERT INTO tb_product (id, name, price, stock, status, image_path) VALUES (?, ?, ?, ?, ?, ?)',
            values: [parseInt(id), name, price, stock, status, `http://localhost:3000/public/${image.originalname}` ]
        }, _response(res));
    }else{
        console.log('This is the rejected field ->', error.field);
    }
}

const updateProduct = (req, res) => {
    const {id, name, price, stock, status} = req.body;
    const { image }  = req.file;
    let sql = '';
    let values = [];
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        sql = 'UPDATE tb_product SET id = ?, name = ?, price = ?, stock = ?, status = ?, image_path = ? WHERE id = ?';
        values = [ parseInt(id), name, price, stock, status, `http://localhost:3000/public/${image.originalname}`, req.params.id ];
    }else{
        sql = 'UPDATE tb_product SET id = ?, name = ?, price = ?, stock = ?, status = ? WHERE id = ?';
        values = [parseInt(id), name, price, stock, status, req.params.id ]  
    }   

    connection.query({sql, values}, _response(res));
}

const deleteProduct = (req, res) => {
    connection.query({
        sql: 'DELETE FROM tb_product WHERE id = ?',
        values: [req.params.id]
    }, _response(res));
}

const _response = (res) => {
    return (error, result) => {
        if(error) {
            res.send({
                status: 'Failed',
                response: error
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
    storeProduct,
    updateProduct,
    deleteProduct
}