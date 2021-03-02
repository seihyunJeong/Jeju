const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productId: String,
    category1: String,
    category2: String,
    category3: String,
    category4: String,
    mallName: String,
    image: String,
    link: String,
    maker: String,
    title: String,
    lprice: String,
    hprice: String,
    brand: String,
    productType: String
});

module.exports = mongoose.model('NaverSearch', ProductSchema);

