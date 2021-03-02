const Product = require('../models/model.js');

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if(!req.body.asin) {
        return res.status(400).send({
            message: "Product code(asin) can not be empty"
        });
    }

    // Create a Product
    const product = new Product({
        productType: req.body.productType || 0,
        asin: req.body.asin,
        domainId: req.body.domainId || 0,
        title: req.body.title || '',
        trackingSince: req.body.trackingSince || 0,
        listedSince: req.body.listedSince || 0,
        lastUpdate: req.body.lastUpdate || 0,
        lastRatingUpdate: req.body.lastRatingUpdate || 0, 
        lastPriceChange: req.body.lastPriceChange || 0,
        lastEbayUpdate: req.body.lastEbayUpdate || 0,
        imagesCSV: req.body.imagesCSV || '',
        rootCategory: req.body.rootCategory || 0,
        categories: req.body.categories || [],
        categoryTree: req.body.categoryTree || [],
        parentAsin: req.body.parentAsin || '',
        variationCSV: req.body.variationCSV || '',
        frequentlyBoughtTogether: req.body.frequentlyBoughtTogether || [],
        eanList: req.body.eanList || [],
        upcList: req.body.upcList || [],
        manufacturer: req.body.manufacturer || '',
        brand: req.body.brand || '',
        productGroup: req.body.productGroup || '',
        partNumber: req.body.partNumber || '',
        author: req.body.author || '',
        binding: req.body.binding || '',
        NumberOfItems: req.body.NumberOfItems || 0,
        NumberOfPages: req.body.NumberOfPages || 0,
        publicationDate: req.body.publicationDate || 0,
        releaseDate: req.body.releaseDate || 0,
        languages:  req.body.languages || [],
        model: req.body.model || '',
        color: req.body.color || '',
        size: req.body.size || '',
        edition: req.body.edition || '',
        format: req.body.format || '',
        features: req.body.features || [],
        description: req.body.description || '',
        packageHeight: req.body.packageHeight || 0,
        packageLength: req.body.packageLength || 0,
        packageWidth: req.body.packageWidth || 0,
        packageWeight: req.body.packageWeight || 0,
        itemHeight: req.body.itemHeight || 0,
        itemLength: req.body.itemLength || 0,
        itemWidth: req.body.itemWidth || 0,
        itemWeight: req.body.itemWeight || 0,
        availabilityAmazon: req.body.availabilityAmazon || 0,
        availabilityAmazonDelay: req.body.availabilityAmazonDelay || [],
        ebayListingIds: req.body.ebayListingIds || [],
        isAdultProduct: req.body.isAdultProduct || false,
        launchpad: req.body.launchpad || false,
        audienceRating: req.body.audienceRating || '',
        newPriceIsMAP: req.body.newPriceIsMAP || false,
        isEligibleForTradeIn: req.body.isEligibleForTradeIn || false,
        isEligibleForSuperSaverShipping: req.body.isEligibleForSuperSaverShipping || false,
        fbaFees: req.body.fbaFees || {},
        variations: req.body.variations || [],
        coupon: req.body.coupon || [],
        promotions: req.body.promotions || [],
        stats: req.body.stats || {},
        salesRankReference: req.body.salesRankReference || 0,
        salesRanks: req.body.salesRanks || {},
        rentalDetails: req.body.rentalDetails || '',
        rentalSellerId: req.body.rentalSellerId || '',
        rentalPrices: req.body.rentalPrices || {},
        offers: req.body.offers || [],
        liveOffersOrder: req.body.liveOffersOrder || [],
        buyBoxSellerIdHistory: req.body.buyBoxSellerIdHistory || [],
        isRedirectASIN: req.body.isRedirectASIN || false,
        isSNS: req.body.isSNS || false,
        offersSuccessful: req.body.offersSuccessful || false,
        csv: req.body.csv || []
    });

    // Save Note in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Prodcut."
        });
    });
};


// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
    Product.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};
/*

// Find a single note with a productId
exports.findOne = (req, res) => {
    Product.findById(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving product with id " + req.params.productId
        });
    });
};

// Find a single note with a productId
exports.findCountry = (req, res) => {
    Product.find({country: req.params.country})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with country " + req.params.country
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with country " + req.params.country
            });                
        }
        return res.status(500).send({
            message: "Error retrieving product with country " + req.params.country
        });
    });
};

// Update a product identified by the productId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.title) {
        return res.status(400).send({
            message: "Product title can not be empty"
        });
    }

    // Find product and update it with the request body
    Product.findByIdAndUpdate(req.params.productId, {
        title: req.body.title ,
        price: req.body.price || 'empty price',
        description: req.body.description || 'empty description', 
        rating: req.body.rating || 'empty rating',
        reviewCount: req.body.reviewCount || 'empty review count',
        date: req.body.date || 'empty date'
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error updating product with id " + req.params.productId
        });
    });
};

// Delete a product with the specified productId in the request
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send({message: "Product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Could not delete product with id " + req.params.productId
        });
    });
};
*/