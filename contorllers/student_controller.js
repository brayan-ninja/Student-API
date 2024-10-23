const Student = require('../models/studentmodel');

module.exports= {
    addstudent :  async(req,res, next ) => {
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
        
        },

     updatestudent : async(req, res, next) => {
        try{
            const id =req.params.id;
            const updatedstudent = req.body;
            const options = {new: true};
            const result = await Student.findByIdAndUpdate(id, updatedstudent, options)
            res.send(result);
        } catch(error){
            console.log(error.message);
        }
    },

    deletestudent : async(req,res) => {
        const id= req.params.id
        {
            try{
                const student = await Student.findByIdAndDelete(id)
                res.send(student);
                
            } catch(error){
                console.log(error.message);
            }
        }
    },
    getallstudent : async(req, res)=>{

        try {
            const student = await Student.find();
            res.send(student);
    
        } catch (error) {
             console.log(error.message);
        }
}
}
