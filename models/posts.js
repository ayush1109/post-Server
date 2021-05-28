const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const posts = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})

const Posts = mongoose.model('Posts', posts)
module.exports = Posts;