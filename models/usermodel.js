const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bycrpt = require('bcrypt')

const userSchema = new Schema({
    email:{
        type: String,
        lowercase:true,
        unique:true,

        required:[true, 'email is required']
    },
     password:{
        type:String,
        required:[true, 'password is required']
    },
   
});

//hashing the password before its saved
userSchema.pre("save", async function (next){
    try{
        const salt =await bycrpt.genSalt(10);
        const hashedPassword = await bycrpt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch(error) {
        next(error);
    }
}
);

//comparing password entered to one in db
userSchema.methods.isValidPassword = async function(password){
    try{
        return await bycrpt.compare(password, this.password);
    } catch(error){
        throw error;
    }

}

const User = mongoose.model('user', userSchema);
module.exports =User;