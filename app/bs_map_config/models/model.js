const mongoose = require('mongoose');

const BestSellerMapSchema = mongoose.Schema({
    category1: String,
    category2: String,
    category3: String,
    category4: String,
    category5: String,
    category6: String,
    category7: String,
    url: String,
    department: String,
    completed: Number,
});

module.exports = mongoose.model('BestSellerMapConfig', BestSellerMapSchema);