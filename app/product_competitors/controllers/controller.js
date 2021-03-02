const Product = require('../models/model.js');

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title) {
        return res.status(400).send({
            message: "Product code(title) can not be empty"
        });
    }

    // Create a Product
    const product = new Product({
        title: req.body.title || '', 
        code: req.body.code || '',
        price: req.body.price || '', 
        byLineInfo: req.body.byLineInfo || '',
        sellerNum: req.body.sellerNum ||'',
        salesRank: req.body.salesRank || '',
        category: req.body.category1 ||'',
        avgRating: req.body.avgrating || '',
        ratingNum: req.body.ratingnum || '',
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


// Find a single note with a productId
exports.findOne = (req, res) => {
    Product.find({code:req.params.productId})
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
/*
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
*/
// Update a product identified by the productId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.code) {
        return res.status(400).send({
            message: "Product code can not be empty"
        });
    }
    console.log(req.body)
    // Find product and update it with the request body
    Product.findOneAndUpdate({code: req.body.code}, {
        title: req.body.title || '', 
        code: req.body.code || '',
        price: req.body.price || '', 
        byLineInfo: req.body.byLineInfo || '',
        sellerNum: req.body.sellerNum ||'',
        salesRank: req.body.salesRank || '',
        avgRating: req.body.avgrating || '',
        ratingNum: req.body.ratingnum || '',
    })
    .then(result => {
        console.log('title: ' + req.body.title)
        console.log('code: ' + req.body.code)
        console.log('price: ' + req.body.price)
        
        if(!result) {
            return res.status(404).send({
                message: "asin not found(404)" + req.body.code
            });
        }
        res.send(result);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "product not found with Objectid (404)" + req.body.code
            });                
        }
        return res.status(500).send({
            message: "Error updating product with asin (500)" + req.body.code
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