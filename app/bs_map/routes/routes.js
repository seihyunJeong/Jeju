module.exports = (app) => {
    const bs = require('../controllers/controller.js');

    // Create a new Note
    app.post('/api/bs_map', bs.create);

    // Retrieve all Notes
    app.get('/api/bs_map', bs.findAll);

    // Update a new Note
    app.post('/api/bs_map/update', bs.update);

    // Retrieve a single Note with noteId
    app.get('/api/bs_map/completed/:completed', bs.findCompleted);
}