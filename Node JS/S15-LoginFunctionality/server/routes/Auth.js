const express = require("express");
const createConnection = require("../model/Connection.js");

const route = express.Router();

route.get("/login/:username/:password", async (req, res) => {
  const username = req.params.username;
  const password = req.params.password;
  console.log(username,password);
  const collection = await createConnection();
  const resultofUserName = await collection.findOne({name:username});
  const resultofPassword = await collection.findOne({password:password});
  console.log(resultofUserName,resultofPassword)
  
//   if(resultofUserName.name === username && resultofPassword.password === password){res.json({
//     ok:true,
//     result : "valid User"
//   }
//   )}
//   else if (resultofUserName.name === username && resultofPassword.password !== password ){
//     res.send("enter Correct Password")
//   }
//   else if (resultofUserName.name !== username && resultofPassword.password === password ){
//     res.send("enter Correct Username")
//   }

//   else{
//     res.send("Enter correct user details")
//   }
  
//   res.send("working");
//   console.log(resultofUserName,resultofPassword);
}); // http://localhost:7986/auth/login

module.exports = route;
