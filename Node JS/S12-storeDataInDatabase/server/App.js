const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
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
  var data=collection.insertOne(req.body);

  res.send({
    status:true,
    result:"Inserted Successfully"
  });
}); // http://localhost:7986/newUser

app.listen(7986, () => {
  console.log("Server is started");
});
