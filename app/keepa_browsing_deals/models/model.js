const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    // product information
    asin: String,
    title: String,
    rootCat: Number,
    categories: Array,
    image: Array,

    // price/rank information
    current: Array,
    deltaLast: Array,
    delta: Array,
    deltaPercent: Array,
    avg: Array,

    // deal information
    creationDate: Number,
    lastUpdate: Number,
    lightningEnd: Number,
    warehouseCondition: Number,
    warehouseConditionComment: String
});

module.exports = mongoose.model('KeepaBrowsingDeals', ProductSchema);

