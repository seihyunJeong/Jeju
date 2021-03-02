module.exports = (app) => {
    const proxy = require('../controllers/controller.js');

    // Create a new Note
    app.post('/api/proxylist', proxy.create);

    // Update a new Note
    app.post('/api/proxylist/update', proxy.update);

    // Retrieve all Notes
    app.get('/api/proxylist', proxy.findAll);

    // Retrieve a single Note with noteId
    app.get('/api/proxylist/index/:index', proxy.findOne);



}