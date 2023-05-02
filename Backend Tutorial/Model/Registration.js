const mongoose = require("mongoose")

const registrationSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    password:String
})

const REGISTRATION = mongoose.model("REGISTRATION", registrationSchema)

module.exports = REGISTRATION