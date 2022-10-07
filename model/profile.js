import mongoose from "mongoose"
// const Schema = mongoose.Schema

const profileSchema =  mongoose.Schema({
    Name: String,
    Email: String,
   
}, {
    timestamps: true
}, )
module.exports = mongoose.models.profiles|| mongoose.model('profiles', profileSchema)
