
const mongoose = require('mongoose')

// SIN VALIDACIONES NI MIDDLE
// const {UserModel} = require('./user')
// const {ProfileModel} = require('./profile')
// const {CredentialsModel} = require('./credentials')

// CON VALIDACIONES Y MIDDLE
const {UserModel}=require('./userValidation')
const {ProfileModel} = require('./profileValidationMiddle')
const {CredentialsModel} = require('./credentialsValidationMiddle')

mongoose.connect('mongodb+srv://dbRafa:Miisima79@cluster0.dcvbwwg.mongodb.net/codenotch');


// DESCOMENTAR LA CORRESPONDIENTE PARA IR COMPROBANDO

const user = new UserModel({
    login: "rafael197-bcc", 
    password: "12345678dagb"
})

user.save().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})


// const profile = new ProfileModel({
//     name: "Daniel", 
//     surname: "Vera",
//     dateOfBirth: "2000-10-27",
//     comments: "newuser2",
//     rol: "nivel4"
// })

// profile.save().then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })



// const credentials = new CredentialsModel({
//     address: "Agustín Romero 8", 
//     phone: 630412942,
//     email: "aaa@gmail.com"
// })


// credentials.save().then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })