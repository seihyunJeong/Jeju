const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    code: String,
    price : String,
    byLineInfo: String, 
    sellerNum: String,
    salesRank: Array,
    category: String,
    avgRating: String,
    ratingNum: Number,
});

module.exports = mongoose.model('ProductCompetitors', ProductSchema);

