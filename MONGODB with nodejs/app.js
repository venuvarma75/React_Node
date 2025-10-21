const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017/");

let db;

app.use(express.json());

const connectDB = async () => {
  await client.connect();
  console.log("mongodb connected");
  db = client.db("node_db");
  console.log("database created");
  const collection = db.collection("sample");
  console.log("collection created in database");
  await db.collection("sample").insertOne({ name: "varma", age: 25 });
};
connectDB();

app.post("/add", async (req, res) => {
  try {
    await db.collection("sample").insertOne(req.body);
    res.send("information is given");
  } catch (error) {
    res.status(400).send("updated information");
  }
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});