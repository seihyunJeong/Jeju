const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    asin: String,
    title: String,
    star: String,
    verified : String,
    date: String, 
    content: String,
    helpful: String,
});

module.exports = mongoose.model('Reviews', ProductSchema);

