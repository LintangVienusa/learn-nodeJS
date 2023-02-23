const connection = require('../../config/mysql');

const index = (req, res) =>{
    connection.query({
        sql: 'SELECT * FROM tb_product',
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
    index
}