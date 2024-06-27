const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
    name:String,
    mail:String,
    password:String,
    number:Number,
    balance:Number
})

const detailModel = mongoose.model("details", detailSchema);

module.exports = detailModel
