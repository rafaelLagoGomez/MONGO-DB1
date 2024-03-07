
const mongoose= require('mongoose')

const CredentialsSchema = new mongoose.Schema({
    address: String, 
    phone: Number,
    email: String
})

const CredentialsModel= mongoose.model('credentials', CredentialsSchema)

module.exports = {
    CredentialsModel
}