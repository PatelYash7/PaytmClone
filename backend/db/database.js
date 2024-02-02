const mongoose = require('mongoose');
const {connect,Schema,model} = mongoose;
const {MONGO_URL} = require('../config');


const Database= connect(MONGO_URL).then((e)=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log("Erro Happened Cannot Connect to Database")
    console.log(err);
})

const UserSchema = Schema({
    name:String,
    email:String,
    password:String,
    phone:Number
})

const User = model('User',UserSchema);
module.exports = {
    Database,
    User
}