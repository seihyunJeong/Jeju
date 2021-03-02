const CategoryMapConfig = require('../models/model.js');

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if(!req.body.cat1) {
        return res.status(400).send({
            message: "CategoryMapConfig category1 can not be empty" + req.body.cat1
        });
    }

    console.log('category1: ' + req.body.cat1)
    console.log('category2: ' + req.body.cat2)
    console.log('category3: ' + req.body.cat3)
    console.log('category4: ' + req.body.cat4)
    console.log('category5: ' + req.body.cat5)
    console.log('category6: ' + req.body.cat6)
    console.log('category7: ' + req.body.cat7)
    console.log('url: ' + req.body.url)
    console.log('completed: ' + req.body.completed)

    // Create a Product
    const categorymapconfig = new CategoryMapConfig({
        category1: req.body.cat1,
        category2: req.body.cat2 || '',
        category3: req.body.cat3 || '',
        category4: req.body.cat4 || '',
        category5: req.body.cat5 || '',
        category6: req.body.cat6 || '',
        category7: req.body.cat7 || '',
        url: req.body.url ||'',
        completed: req.body.completed ||0,
    });

    // Save Note in the database
    categorymapconfig.save()
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
    if(!req.body.cat1) {
        return res.status(400).send({
            message: "CategoryMapConfig category1 can not be empty"
        });
    }

    // Find product and update it with the request body
    CategoryMapConfig.findOneAndUpdate({category1: req.body.cat1, category2: req.body.cat2, category3: req.body.cat3, category4: req.body.cat4, category5: req.body.cat5, category6: req.body.cat6, category7: req.body.cat7, url: req.body.url }, {
        completed: req.body.completed,
    })
    .then(result => {
/*        console.log('category1: ' + req.body.cat1)
        console.log('category2: ' + req.body.cat2)
        console.log('category3: ' + req.body.cat3)
        console.log('category4: ' + req.body.cat4)
        console.log('category5: ' + req.body.cat5)
        console.log('category6: ' + req.body.cat6)
        console.log('category7: ' + req.body.cat7)
        console.log('completed: ' + req.body.completed)
        console.log(result)*/
        if(!result) {
            return res.status(404).send({
                message: "CategoryMapConfig not found with cat1 (404)" + req.body.cat1
            });
        }
        res.send(result);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "CategoryMapConfig not found with Objectid (404)" + req.body.cat1
            });                
        }
        return res.status(500).send({
            message: "Error updating CategoryMapConfig with cat1 (500)" + req.body.cat1
        });
    });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
    CategoryMapConfig.find()
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving CategoryMapConfig."
        });
    });
};


// Find a single note with a productId
exports.findOne = (req, res) => {
    CategoryMapConfig.findOne( {category1: req.body.cat1, category2: req.body.cat2, category3: req.body.cat3, category4: req.body.cat4, category5: req.body.cat5, category6: req.body.cat6, category7: req.body.cat7 } )
    .then(result => {
        if(!result) {
            return res.status(404).send({
                message: "CategoryMapConfig not found with index" + req.params.category1
            });            
        }
        res.send(result);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "CategoryMapConfig not found with index " + req.params.category1
            });                
        }
        return res.status(500).send({
            message: "Error retrieving CategoryMapConfig with index " + req.params.category1
        });
    });
};


// Find a single note with a productId
exports.findCompleted = (req, res) => {
    console.log(req.params.completed)
    CategoryMapConfig.find( {completed: req.params.completed } ).limit(100)
    .then(result => {
        if(!result) {
            return res.status(404).send({
                message: "CategoryMapConfig not found with index " + req.params.completed
            });            
        }
        res.send(result);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "CategoryMapConfig not found with index " + req.params.completed
            });                
        }
        return res.status(500).send({
            message: "Error retrieving CategoryMapConfig with index " + req.params.completed
        });
    });
};
