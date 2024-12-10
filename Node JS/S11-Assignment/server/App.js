const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

// Middleware to parse JSON data from the request body
app.use(express.json());
app.use(cors())

app.post("/", (req, res) => {
  const { name, email } = req.body;

  // Log the received data to the console
  console.log("Received Data:", { name, email });

  // Send a response back to the client
  res.status(200).send("Data received successfully");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
