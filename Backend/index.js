//install dependencies
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
//Dotenv
dotenv.config();
//Server
const server = express();
//Connect backend with frontend
server.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
//PORT
const PORT = process.env.PORT;

server.use(express.json());

//It convert urlencoded data in req body
server.use(express.urlencoded({ extended: true }));

// Test Route
server.get("/", (req, res) => {
  res.send("Server is running");
});
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
