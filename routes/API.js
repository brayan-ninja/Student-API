const express = require('express');
const routes = express.Router();
const Student = require('../models/studentmodel');

// get a list from the database
routes.get('/students', (req, res)=>{
    res.send({type:'Get Request'});
});

// add student to the db
routes.post('/students', (req, res)=>{
    res.send({type:'Post Request'});
});

// update student in to db
routes.patch('/updatestudent/:id', async(req, res, next) => {
    try{
        const id =req.params.id;
        const updatedstudent = req.body;
        const options = {new: true};
        const result = await Student.findByIdAndUpdate(id, updatedstudent, options)
        res.send(result);
    } catch(error){
        console.log(error.message);
    }
})

// delete a student from the db
routes.delete('/deletestudent/:id', async(req,res) => {
    const id= req.params.id
    {
        try{
            const student = await Student.findByIdAndDelete(id)
            res.send(student);
            
        } catch(error){
            console.log(error.message);
        }
    }
})


routes.post('/addstudent', async(req,res, next ) => {
    //console.log(req.body);
    // res.send ( req.body)
    try{
        const student = new Student(req.body)
        const result = await student.save();
        res.send(result)
        }
        catch (error){
            console.log(error.message);
        }    
    
    });
module.exports = routes;