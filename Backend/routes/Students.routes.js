const express = require('express');
const router = express.Router();

const{
    addStudents,getStudentDetails,getStudentById,updateStudent,deleteStudent
} = require('../controller/Student.controller');

router.post('/add', addStudents);
router.get('/getAll', getStudentDetails);
router.get('/getStudentDetails/:id', getStudentById);
router.put('/updateStudent/:id', updateStudent);
router.delete('/deleteStudent/:id', deleteStudent);

module.exports = router;