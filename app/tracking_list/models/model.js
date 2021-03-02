const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    code: String,
    price : String,
    byLineInfo: String, 
    sellerNum: String,
    salesRank: Array,
    avgRating : String,
    ratingNum : String,
    star5Ratio : String,
    star4Ratio : String,
    star3Ratio : String,
    star2Ratio : String,
    star1Ratio : String,
    date: Date
});

module.exports = mongoose.model('TrackingList', ProductSchema);

