const { MongoClient } = require("mongodb");
const MONGODB_URL = "mongodb://localhost:27017";

const mongoClient = new MongoClient(MONGODB_URL);

async function createConnection() {
  await mongoClient.connect();
  const db = mongoClient.db("usersdb");
  const collection = db.collection("users");
  return collection;
}

module.exports = createConnection;
