require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT;
const {connect} = require("./config/connections/DB_connect");

//let's initialize some middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,"public")));


//let's connect to the database
connect().then(()=>{
    console.log("connected to the database");
}).catch((error)=>{
    console.log(error);
})





//let's listen our app
app.listen(port,()=>{
    console.log("connected to our server");
})