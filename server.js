const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the Project River amazon database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to the Project River amazon db application."});
});

// Require routes
require('./app/product_details/routes/routes.js')(app);
require('./app/product_list/routes/routes.js')(app);
require('./app/product_map/routes/routes.js')(app);
require('./app/tracking_list/routes/routes.js')(app);
require('./app/proxylist/routes/routes.js')(app);
require('./app/product_map_config/routes/routes.js')(app);
require('./app/reviews/routes/routes.js')(app);
require('./app/category_map_config/routes/routes.js')(app);
require('./app/bs_map_config/routes/routes.js')(app);
require('./app/bs_map/routes/routes.js')(app);
require('./app/product_competitors/routes/routes.js')(app);
require('./app/product_map_competitors/routes/routes.js')(app);
require('./app/product_map_config_competitors/routes/routes.js')(app);
require('./app/keepa_request_products/routes/routes.js')(app);
require('./app/keepa_browsing_deals/routes/routes.js')(app);
require('./app/naver_search/routes/routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
