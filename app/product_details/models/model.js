const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    code: String,
    price : String,
    byLineInfo: String, 
    sellerNum: String,
    salesRank: Array,
    category1: String,
    category2: String,
    category3: String,
    category4: String,
    category5: String,
    date: Date
});

module.exports = mongoose.model('ProductDetails', ProductSchema);

