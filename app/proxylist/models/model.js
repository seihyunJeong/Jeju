const mongoose = require('mongoose');

const ProxyScema = mongoose.Schema({
    index :Number,
    ip: String,
    port: String,
    date: Date
});

module.exports = mongoose.model('ProxyList', ProxyScema);