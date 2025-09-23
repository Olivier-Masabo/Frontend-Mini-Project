 import {Router} from "express"

 const router = Router();

 router.get('/',(req,res) =>{
    res.send("Using Api route")
 })

 module.exports =router;