module.exports = (app) => {
    const products = require('../controllers/controller.js');

    // Create a new Note
    app.post('/api/product_list', products.create);

    // Retrieve all Notes
    app.get('/api/product_list', products.findAll);

    // Retrieve a single Note with noteId
    //app.get('/products/id/:productId', products.findOne);

    // Retrieve all documents that match country
    //app.get('/products/country/:country', products.findCountry);

    // Update a Note with noteId
    //app.put('/products/:productId', products.update);

    // Delete a Note with noteId
    //app.delete('/products/:productId', products.delete);

}