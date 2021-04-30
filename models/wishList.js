const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishList = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: true
    }

})

const WishList = mongoose.model('WishList', wishList)
module.exports = WishList;