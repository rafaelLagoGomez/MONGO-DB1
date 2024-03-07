
const mongoose= require('mongoose');


const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20
    }, 
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})


const UserModel= mongoose.model('user2', UserSchema)

module.exports = {
    UserModel
}