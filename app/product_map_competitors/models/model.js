const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    asin: String,
    reviewnum: Number,
    star: String,
    country: String,
    category1: String,
    category2: String,
    category3: String,
    category4: String,
    category5: String,
    category6: String,
    category7: String,
    date: Date
});

module.exports = mongoose.model('ProductMapCompetitors', ProductSchema);