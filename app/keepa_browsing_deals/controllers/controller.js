const Product = require('../models/model.js');

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if(!req.body.asin) {
        return res.status(400).send({
            message: "Product code(asin) can not be empty"
        });
    }

    // Change format from keepa to general info
    //image
    var inputImage = req.body.image || [];
    var imageName = String.fromCharCode.apply("", inputImage);
    //add 21564000 and then multiply by 60000
    //timestamp
    var creationDate = req.body.creationDate || 0;
    var lastUpdate = req.body.lastUpdate || 0;
    var lightningEnd = req.body.lightningEnd || 0;
    creationDate = (creationDate + 21564000) * 60;
    lastUpdate = (lastUpdate + 21564000) * 60;
    lightningEnd = (lightningEnd + 21564000) * 60;

    // Create a Product
    const product = new Product({
        asin: req.body.asin,
        title: req.body.title || '',
        rootCat: req.body.rootCat || 0,
        categories: req.body.categories || [],
        image: imageName || '',
    
        // price/rank information
        current: req.body.current || [],
        deltaLast: req.body.deltaLast || [],
        delta: req.body.delta || [],
        deltaPercent: req.body.deltaPercent || [],
        avg: req.body.avg || [],
    
        // deal information
        creationDate: creationDate || 0,
        lastUpdate: lastUpdate || 0,
        lightningEnd: lightningEnd || 0,
        warehouseCondition: req.body.warehouseCondition || 0,
        warehouseConditionComment: req.body.warehouseConditionComment || '',
        available: false,
        queryCategory: req.body.queryCategory || 0
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
    });g
};
*/
// Find a single note with a productId
exports.findAvailable = (req, res) => {
    Product.find({available: req.params.available})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with available " + req.params.available
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with available " + req.params.available
            });                
        }
        return res.status(500).send({
            message: "Error retrievin product with available " + req.params.available
        });
    });
};

// Update a product identified by the productId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.asin) {
        return res.status(400).send({
            message: "Product asin can not be empty"
        });
    }

    // Find product and update it with the request body
    Product.findByIdAndUpdate(req.params.asin, {
        available: req.body.available},
        {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with asin " + req.params.asin
            });
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with asin " + req.params.asin
            });                
        }
        return res.status(500).send({
            message: "Error updating product with asin " + req.params.asin
        });
    });
};
/*
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