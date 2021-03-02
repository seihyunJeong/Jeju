const mongoose = require('mongoose');

const ProductmapSchema = mongoose.Schema({
    category1: String,
    category2: String,
    category3: String,
    category4: String,
    category5: String,
    category6: String,
    category7: String,
    pagenumber: Number,
    pageunit: Number,
    url: String,
    department: String,
    completed: Number,
});

module.exports = mongoose.model('ProductMapConfigCompetitors', ProductmapSchema);