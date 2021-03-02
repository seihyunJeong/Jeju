const mongoose = require('mongoose');

const BsSchema = mongoose.Schema({
    asin: String,
    category1: String,
    category2: String,
    category3: String,
    category4: String,
    category5: String,
    category6: String,
    category7: String,
    completed: Number,
});

module.exports = mongoose.model('bestseller', BsSchema);