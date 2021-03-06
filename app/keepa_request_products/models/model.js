const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productType: Number,
    asin: String,
    domainId: Number,
    title: String,
    trackingSince: Number,
    listedSince: Number,
    lastUpdate: Number,
    lastRatingUpdate: Number, 
    lastPriceChange: Number,
    lastEbayUpdate: Number,
    imagesCSV: String,
    rootCategory: Number,
    categories: Array,
    categoryTree: Array,
    parentAsin: String,
    variationCSV: String,
    frequentlyBoughtTogether: Array,
    eanList: Array,
    upcList: Array,
    manufacturer: String,
    brand: String,
    productGroup: String,
    partNumber: String,
    author: String,
    binding: String,
    numberOfItems: Number,
    numberOfPages: Number,
    publicationDate: Number,
    releaseDate: Number,
    languages:  Array,
    model: String,
    color: String,
    size: String,
    edition: String,
    format: String,
    features: Array,
    description: String,
    packageHeight: Number,
    packageLength: Number,
    packageWidth: Number,
    packageWeight: Number,
    itemHeight: Number,
    itemLength: Number,
    itemWidth: Number,
    itemWeight: Number,
    availabilityAmazon: Number,
    availabilityAmazonDelay: Array,
    ebayListingIds: Array,
    isAdultProduct: Boolean,
    launchpad: Boolean,
    audienceRating: String,
    newPriceIsMAP: Boolean,
    isEligibleForTradeIn: Boolean,
    isEligibleForSuperSaverShipping: Boolean,
    fbaFees: Object,
    variations: Array,
    coupon: Array,
    promotions: Array,
    stats: mongoose.Schema.Types.Mixed,
    salesRankReference: Number,
    salesRanks: Object,
    rentalDetails: String,
    rentalSellerId: String,
    rentalPrices: mongoose.Schema.Types.Mixed,
    offers: Array,
    liveOffersOrder: Array,
    buyBoxSellerIdHistory: Array,
    isRedirectASIN: Boolean,
    isSNS: Boolean,
    offersSuccessful: Boolean,
    csv: Array
});

module.exports = mongoose.model('KeepaProduct', ProductSchema);

