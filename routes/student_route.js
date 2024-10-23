const express = require('express');
const student_controller = require('../contorllers/student_controller');
const routes = express.Router();

// get a list from the database
routes.get('/getallstudent', student_controller.getallstudent)

// update student in to db
routes.patch('/updatestudent/:id', student_controller.updatestudent)

// delete a student from the db
routes.delete('/deletestudent/:id', student_controller.deletestudent)

// add student
routes.post('/addstudent', student_controller.addstudent)
module.exports = routes;