const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    department:{
        type: String,
        required:[true, 'Deparment is required']
    },
    course:{
        type:String,
        required:[true, 'course is required']
    },
   
});

const Course = mongoose.model('course', courseSchema);
module.exports =Course;