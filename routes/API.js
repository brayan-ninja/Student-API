const express = require('express');
const routes = express.Router();

// get a list from the database
routes.get('/students', (req, res)=>{
    res.send({type:'Get Request'});
});

// add student to the db
routes.post('/students', (req, res)=>{
    res.send({type:'Post Request'});
});

// update student in to db
routes.put('/students', (req, res)=>{
    res.send({type:'Update Request'});
});


// delete a student from the db
routes.delete('/students', (req, res)=>{
    res.send({type:'Delete Request'});
});
module.exports = routes;