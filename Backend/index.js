require("dotenv").config();
const express=require("express");
const app= express();
const Port=3000;
// npm i cookie-parser cors passport express-json already installed
app.listen(Port,()=>{
    console.log(`The server is running on port ${Port}`);
})


app.get("/",(req,res)=>{
    res.send("helo krishna");
})