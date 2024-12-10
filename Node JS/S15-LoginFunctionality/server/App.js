const express = require("express");
const userRoute = require('./routes/Auth')
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
const MONGO_URL = "mongodb://localhost:27017";

const mongoClient = new MongoClient(MONGO_URL); //instane of the MongoClient

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth",userRoute); 

app.post("/newUser", async (req, res) => {
  // console.log(req.body);
  await mongoClient.connect();
  const db = mongoClient.db("usersdb");
  const collection = db.collection("users");
  var data = collection.insertOne(req.body);

  res.send({
    status: true,
    result: "Inserted Successfully",
  });
}); // http://localhost:7986/newUser

app.get("/getuser", async (req, res) => {
  await mongoClient.connect();
  const db = mongoClient.db("usersdb");
  const collection = db.collection("users");
  var data = await collection.find().toArray();
  res.json(data);
}); // http://localhost:7986/getuser

app.delete("/removeuser/:id", async (req, res) => {
  const id = req.params.id;
  // res.send(id);
  await mongoClient.connect();
  const db = mongoClient.db("usersdb");
  const collection = db.collection("users");
  var result = await collection.deleteOne({ _id:new ObjectId(id) });
  console.log(result);
  res.json({
    ok: true,
    message: "User Removed Successfully",
  })
}); //http://localhost:7986/removeuser/675273ba14fd2da3102fe39d

app.get("/getsingleuser/:id",async(req,res)=>{

  const id = req.params.id
  await mongoClient.connect();
  const db = mongoClient.db("usersdb");
  const collection = db.collection("users");
  var data = await collection.findOne({_id:new ObjectId(id)})
  console.log(data)
  if(!data){
    res.json({
      ok:false,
      result:"No data found "
    })
  }
  else{
    res.json({
      ok:true,
    result:data
    })
  }

}) // http://localhost:7986/getsingleuser/id

app.put("/updateuser/:id",async(req,res)=>{
  const data = req.body
  const id = data._id
  delete data._id
  console.log(data)
  await mongoClient.connect();
  const db = mongoClient.db("usersdb");
  const collection = db.collection("users");
  let result= await collection.updateOne({_id:new ObjectId(id)},{$set:data})
  console.log(result)
  res.send(result)
}) // http://localhost:7986/updateuser/675273ba14fd2da3102fe39d

app.listen(7986, () => {
  console.log("Server is started");
});
