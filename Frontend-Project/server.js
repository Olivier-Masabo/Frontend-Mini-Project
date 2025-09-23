 import express from "express";
 
 const app = express();
 const port =3000;

 app.get('/',(req,res) =>{
    res.send("Welcome to walker world")
 })

 app.listen(port, () =>{
    console.log(`this app is listening to port ${port}`)
 })