
const mongoose= require('mongoose')

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        enum:['Daniel','Carla','Tinashe']
    },
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol: {
        type: String,
        enum:['nivel4','nivel1']
    }
})


ProfileSchema.pre('save',function(next){
    const today = new Date();
    const birthDate = new Date(this.dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
        return next(new Error('No se puede crear un perfil para un user menor de 18 años'));
    }
    next()
})


const ProfileModel= mongoose.model('profile', ProfileSchema)

module.exports = {
    ProfileModel
}