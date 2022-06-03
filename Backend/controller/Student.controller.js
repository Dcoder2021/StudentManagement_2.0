const router = require("express").Router();
const student = require("../models/Students.models");
const Student = require('../models/Students.models');

const addStudents = (req,res)=> {

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;

    const newStudent = new Student({
        name,
        age,
        gender,
        address
    })

    newStudent.save().then(()=>{
        res.json("student added")
    }).catch((err)=>{
        console.log(err);
    })
}

 const getStudentDetails = (req,res)=>{

    Student.find().then((student)=>{
        res.json(student)
    }).catch((err)=> {
        console.log(err)
    })
 }

 const getStudentById = (async (req,res)=> {
    const userId = req.param.id;
    const user = await student.findById(userId)
        .then((user) =>{
            res.status(200).send({message: "user fetched ", user})
        }).catch((err) =>{
            res.status(500).send({message: "error with find student ", error: err.message});
        })
 })

 const updateStudent =  (req,res)=>{

    student.findByIdAndUpdate(req.params.id, {$set:{name:req.body.name, age:req.body.age, gender:req.body.gender, address:req.body.address}})
        .then(()=> res.json('Update success'))
        .catch(err=> res.status(400).json('Error: ' +err));
 }

 const deleteStudent = (async(req,res)=>{
    const userId = req.params.id;

    await Student.findByIdAndDelete(userId)
        .then(()=>{
            res.status(200).send({status:"user deleted"});
        }).catch((err)=>{
            res.status(500).send({status:"Error with deleting student data ", error:err.message});
        })
})

module.exports ={
    addStudents,
    getStudentDetails,
    getStudentById,
    updateStudent,
    deleteStudent
}