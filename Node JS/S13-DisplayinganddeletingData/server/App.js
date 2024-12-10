const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
const MONGO_URL = "mongodb://localhost:27017";

const mongoClient = new MongoClient(MONGO_URL); //instane of the MongoClient

const app = express();
app.use(cors());
app.use(express.json());

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

app.listen(7986, () => {
  console.log("Server is started");
});
