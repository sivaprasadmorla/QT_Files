const express = require("express");

const app = express();

app.get("/getdata",(req,res)=>{
    res.end("<h1>Welcome to Express Js</h1>")
})

app.get("/getjson",(req,res)=>{
    res.json([{name:"siva",id:2002,phn:4384903809},{name:"Ramu",id:2007,phn:43689903809}])
})

app.get("/getdata/num",(req,res)=>{
    res.send("this is numbers")
})

app.listen(6767, () => {
  console.log("server started");
});
