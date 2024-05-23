import express from "express";
import mongoose from 'mongoose';

const PORT = 5050;
const app = express();


mongoose.connect("mongodb://jessi316866:dj1EtjM9DPGOzsos@cluster0.28byxxv.mongodb.net:27017/");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});


// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
