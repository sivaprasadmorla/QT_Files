const { MongoClient } = require("mongodb");
const http = require("http");
// const { userInfo } = require("os");

const mongodb_URL = "mongodb://localhost:27017";
const mongoClient = new MongoClient(mongodb_URL);
const dbName = "nodeDB";
const collectionName = "users";
async function connectMongoDb(res) {
  // connecting with MongoDB server
  await mongoClient.connect();
  console.log("connected to MongoDb server");

  // connecting with MongoDb Database
  const db = mongoClient.db(dbName);
  console.log("connected to MongoDb Database");

  // connecting with users collection
  const collection = db.collection(collectionName);
  console.log("connected to the collection");
  // fetching data from collection
  var userdata = await collection.find().toArray();
  console.log(userdata);
  res.end(JSON.stringify(userdata));

}


  const server = http.createServer((req,res)=>{
    connectMongoDb(res);
  })
  server.listen(6565,()=>{
    console.log("server is started")
  })


