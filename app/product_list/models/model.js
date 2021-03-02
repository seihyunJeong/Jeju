const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    code: String, 
    url: String,
    country: String,
    date: Date
});

module.exports = mongoose.model('ProductList', ProductSchema);