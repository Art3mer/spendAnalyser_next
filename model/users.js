import mongoose from "mongoose"

const userSchema =  mongoose.Schema({
    Food: String,
    Amount: String,
    ProfileId:Object,
}, {
    timestamps: true
}, )
module.exports = mongoose.models.users|| mongoose.model('users', userSchema)
