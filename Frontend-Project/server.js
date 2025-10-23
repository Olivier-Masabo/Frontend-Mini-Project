 import express from "express";
 import cors from "cors";
 import listroute from "./src/Backend/routes.js"

 
 const app = express();
 app.use(cors())
 const port =8080;

 app.use(express.json())
 app.get('/',(req,res) =>{
    res.send("Welcome to walker world")
 })
 app.use("/api/list",listroute)
 



 app.listen(port, () =>{
    console.log(`this app is listening to port ${port}`)
 })