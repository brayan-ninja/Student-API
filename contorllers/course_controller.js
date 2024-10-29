const Course = require('../models/coursemodel');

module.exports = {
    addcourse: async (req, res, next) => {
        try {
            const course = new Course(req.body); // Use Course instead of course
            const result = await course.save(); // Save the course instance
            res.send(result);
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ error: error.message }); // Send error response
        }
    },

    updatecourse: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updatedCourse = req.body; // Use updatedCourse instead of updatedstudent
            const options = { new: true };
            const result = await Course.findByIdAndUpdate(id, updatedCourse, options); // Use Course instead of Student
            res.send(result);
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ error: error.message }); // Send error response
        }
    },

    deletecourse: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedCourse = await Course.findByIdAndDelete(id); // Use Course instead of Student
            res.send(deletedCourse);
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ error: error.message }); // Send error response
        }
    },

    getallcourse: async (req, res) => {
        try {
            const courses = await Course.find(); // Use Course instead of Student
            res.send(courses);
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ error: error.message }); // Send error response
        }
    }
};