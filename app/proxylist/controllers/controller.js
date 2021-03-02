const Proxy = require('../models/model.js');

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if(!req.body.index) {
        return res.status(400).send({
            message: "Proxy index can not be empty" + req.body.index
        });
    }

    // Create a Product
    const proxy = new Proxy({
        index: req.body.index || 0,
        ip: req.body.ip || '', 
        port: req.body.port || '',
        date: req.body.date || '', 
    });

    // Save Note in the database
    proxy.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Prodcut."
        });
    });
};

// Update a product identified by the productId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.index) {
        return res.status(400).send({
            message: "Proxy index can not be empty"
        });
    }

    // Find product and update it with the request body
    Proxy.findOneAndUpdate({index: req.body.index}, {
        index: req.body.index,
        ip: req.body.ip || '', 
        port: req.body.port || '',
        date: req.body.date || '', 
    }, {new: true})
    .then(proxy => {
        if(!proxy) {
            return res.status(404).send({
                message: "Proxy not found with index (404)" + req.body.index
            });
        }
        res.send(proxy);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Proxy not found with Objectid (404)" + req.body.index
            });                
        }
        return res.status(500).send({
            message: "Error updating proxy with id (500)" + req.body.index
        });
    });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
    Proxy.find()
    .then(proxys => {
        res.send(proxys);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};


// Find a single note with a productId
exports.findOne = (req, res) => {
    Proxy.findOne({index: req.params.index})
    .then(proxy => {
        if(!proxy) {
            return res.status(404).send({
                message: "Proxy not found with index" + req.params.index
            });            
        }
        res.send(proxy);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Proxy not found with index " + req.params.index
            });                
        }
        return res.status(500).send({
            message: "Error retrieving proxy with index " + req.params.index
        });
    });
};

