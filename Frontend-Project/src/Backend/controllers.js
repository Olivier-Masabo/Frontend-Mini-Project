 import pool from "./database.js"
 import {getListQuery,getListByNumber} from "./queries.js";
 const getList = (req,res) =>{
   pool.query(getListQuery,(error, result) =>{
    if(error) throw error;
    res.status(200).json(result.rows)
   })
 }

 const getListByNum =(req,res) =>{
  const number = (req.params.number)
  pool.query(getListByNumber,[number],(error,result) =>{
   if(error) throw error;
    res.status(200).json(result.rows)
  })
 }

 export {getList,getListByNum};