const express = require('express');
const course_controller = require('../contorllers/course_controller'); // Corrected the spelling of 'controllers'
const routes = express.Router();

// Get a list of courses from the database
routes.get('/getallcourse', course_controller.getallcourse)

// Update a course in the database
routes.patch('/updatecourse/:id', course_controller.updatecourse)

// Delete a course from the database
routes.delete('/deletecourse/:id', course_controller.deletecourse)

// Add a course
routes.post('/addcourse', course_controller.addcourse)

module.exports = routes;