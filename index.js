const express = require ('express');
const app = express();
require('dotenv').config();
require('./helpers/init_mongodb');
const routes = require('./routes/api');
app.use(routes);



app.listen(process.env.PORT|| 4000, function() {
    console.log('Now listening for request on: http://localhost:4000');   
});