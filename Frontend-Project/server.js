 import express from "express";
 import listroute from "./src/Backend/routes"
 
 const app = express();
 const port =3000;

 app.get('/',(req,res) =>{
    res.send("Welcome to walker world")
 })
 app.use("/api/v1/list",listroute)

 app.listen(port, () =>{
    console.log(`this app is listening to port ${port}`)
 })