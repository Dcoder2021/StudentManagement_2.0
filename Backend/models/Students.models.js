const mongoose = require("mongoose");
constcors = require('cors');

const {Schema} = mongoose;

const studentSchema = new Schema({

    name:String,
    age:Number,
    gender:String,
    address:String
});

const student = mongoose.model("student", studentSchema);

module.exports = student;