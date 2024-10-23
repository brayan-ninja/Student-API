// we are using express for the routing
const express = require('express');
const studentroute = require('./routes/student_route')
require('dotenv').config();
require('./helpers/init_mongodb');
const app = express();

// Use your routes here
app.use(express.json());
app.use(studentroute);


// Handling 404 error
app.use((req, res, next)=>{
    const err = new Error("Not Found");
    err.status = 404
    next(err)
});

// Error handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    })
});

// setting up a server
app.listen(process.env.PORT || 4000, function(){
    console.log('Now listening for requests on: http://localhost:4000')
});