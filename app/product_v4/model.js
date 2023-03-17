const mongoose = require('mongoose');

const catalogSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Field must be filled!'],
        minLength: 3,
        maxLength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 1000,
        max: 100000000
    },
    stock: Number,
    status: {
        type: Boolean,
        default: true
    },
    image_path: {
        type: String
    }
})

const catalogs = mongoose.model('catalogs', catalogSchema)
module.exports = catalogs;