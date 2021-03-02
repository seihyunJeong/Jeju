const Product = require('../models/model.js');

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if(!req.body.asin) {
        return res.status(400).send({
            message: "Product asin can not be empty"
        });
    }

    // Create a Product
    const product = new Product({
        title: req.body.title || '', 
        asin: req.body.asin ,
        reviewnum: req.body.reviewnum || 0,
        star: req.body.star || '',
        country: req.body.country || '',
        category1: req.body.category1 || '',
        category2: req.body.category2 || '',
        category3: req.body.category3 || '',
        category4: req.body.category4 || '',
        category5: req.body.category5 || '',
        category6: req.body.category6 || '',
        category7: req.body.category7 || '',
        date: req.body.date || ''
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