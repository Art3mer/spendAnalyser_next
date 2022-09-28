import mongoose from "mongoose"
// const Schema = mongoose.Schema

const userSchema =  mongoose.Schema({
    Food: String,
    Amount: String,
}, {
    timestamps: true
}, )
module.exports = mongoose.models.users|| mongoose.model('users', userSchema)
