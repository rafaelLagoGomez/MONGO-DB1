
const mongoose= require('mongoose')

const UserSchema = new mongoose.Schema({
    login: String, 
    password: String
})

const UserModel= mongoose.model('user2', UserSchema)

module.exports = {
    UserModel
}