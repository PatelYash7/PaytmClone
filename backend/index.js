const express = require("express");
const bodyParser = require("body-parser");
const { MONGO_URL } = require("./config");
const db = require("./db/database");

const app = express();


db
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.json({
        mes:"Connected to Database"
    })
})

app.listen(3000,()=>{
    console.log("Server Started");
})
console.log(MONGO_URL);