
const mongoose= require('mongoose')

const CredentialsSchema = new mongoose.Schema({
    address: String, 
    phone: {
        type: Number,
        minlengt: 9,
        maxlength: 9,
    },
    email: {
        type: String,
        unique:true,
        validate: [
            function (email){
                return email.includes("@")
            },
            'Tu email necesita el caracter @'
        ]
    },
})

const CredentialsModel= mongoose.model('credentials', CredentialsSchema)

module.exports = {
    CredentialsModel
}