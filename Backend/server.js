const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://DimuEpTestDB2:EpTestDB2@testproject01.gvi2s6s.mongodb.net/TestStudent_DB?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Mongo DB Connected");
    }).catch(err=>[
    console.log(err)
]);

const studentsRoutes = require('./routes/Students.routes');
app.use("/api/student", studentsRoutes); 

app.listen(3001, () => {
    console.log("Server is Running");
});