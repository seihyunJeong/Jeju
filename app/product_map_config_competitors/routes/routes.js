module.exports = (app) => {
    const product_map = require('../controllers/controller.js');

    // Create a new Note
    app.post('/api/productmap_config_competitors', product_map.create);

    // Update a new Note
    app.post('/api/productmap_config_competitors/update', product_map.update);

    // Retrieve all Notes
    app.get('/api/productmap_config_competitors', product_map.findAll);

    // Retrieve a single Note with noteId
    app.get('/api/productmap_config_competitors/category/:cat1:cat2:cat3:cat4:cat5:cat6:cat7', product_map.findOne);

    // Retrieve a single Note with noteId
    app.get('/api/productmap_config_competitors/completed/:completed', product_map.findCompleted);

    // Retrieve all documents that match country
    //app.get('/products/country/:country', products.findCountry);

    // Update a Note with noteId
    //app.put('/products/:productId', products.update);

    // Delete a Note with noteId
    //app.delete('/products/:productId', products.delete);

}