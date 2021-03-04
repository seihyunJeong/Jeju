module.exports = (app) => {
    const products = require('../controllers/controller.js');

    // Create a new Note
    app.post('/api/keepa/browsing-deals', products.create);

    // Retrieve all Notes
    app.get('/api/keepa/browsing-deals', products.findAll);

    // Retrieve a single Note with noteId
    //app.get('/products/id/:productId', products.findOne);

    // Retrieve all documents that match country
    app.get('/api/keepa/browsing-deals/available/:available', products.findAvailable);

    // Update a Note with noteId
    app.put('/api/keepa/browsing-deals/:productId', products.update);

    // Delete a Note with noteId
    //app.delete('/products/:productId', products.delete);

}