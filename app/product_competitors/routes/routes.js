module.exports = (app) => {
    const products = require('../controllers/controller.js');

    // Create a new Note
    app.post('/api/product_competitors', products.create);

    // Retrieve all Notes
    app.get('/api/product_competitors', products.findAll);

    // Retrieve a single Note with noteId
    app.get('/api/product_competitors/id/:productId', products.findOne);

    // Retrieve all documents that match country
    //app.get('/products/country/:country', products.findCountry);

    // Update a Note with noteId
    app.post('/api/product_competitors/update', products.update);

    // Delete a Note with noteId
    //app.delete('/products/:productId', products.delete);

}