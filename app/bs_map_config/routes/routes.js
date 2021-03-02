module.exports = (app) => {
    const category_map = require('../controllers/controller.js');

    // Create a new Note
    app.post('/api/bestsellermap_config', category_map.create);

    // Update a new Note
    app.post('/api/bestsellermap_config/update', category_map.update);

    // Retrieve all Notes
    app.get('/api/bestsellermap_config', category_map.findAll);

    // Retrieve a single Note with noteId
    app.get('/api/bestsellermap_config/category/:cat1:cat2:cat3:cat4:cat5:cat6:cat7', category_map.findOne);

    // Retrieve a single Note with noteId
    app.get('/api/bestsellermap_config/completed/:completed', category_map.findCompleted);

    // Retrieve all documents that match country
    //app.get('/products/country/:country', products.findCountry);

    // Update a Note with noteId
    //app.put('/products/:productId', products.update);

    // Delete a Note with noteId
    //app.delete('/products/:productId', products.delete);

}