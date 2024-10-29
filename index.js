// We are using Express for routing
const express = require('express');
const studentRoute = require('./routes/student_route'); 
const courseRoute = require('./routes/course_routes'); 
const userRoute = require('./routes/user_routes');
require('dotenv').config();
require('./helpers/init_mongodb');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use your routes here
app.use(studentRoute); // Optional: prefix routes for better organization
app.use(courseRoute);    // Optional: prefix routes for better organization
app.use(userRoute);        // Optional: prefix routes for better organization

// Handling 404 error
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

// Setting up a server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Now listening for requests on: http://localhost:${PORT}`);
});