 import pool from "./database.js"
 import {getTaskQuery,getTaskByNumber,addTask,checkTaskExistance,addTasks} from "./queries.js";
 const getTask = (req,res) =>{
   pool.query(getTaskQuery,(error, result) =>{
    if(error) throw error;
    res.status(200).json(result.rows)
   })
 }

 const getTaskByNum =(req,res) =>{
  const number = (req.params.number)
  pool.query(getTaskByNumber,[number],(error,result) =>{
   if(error) throw error;
    res.status(200).json(result.rows)
  })
 }

 const addTask = (req,res) =>{
  const {task} =req.body;
  // check if task exist
  pool.query(checkTaskExistance,[task],(error,result) =>{
    if(result.rows.length){
      res.send("Task already exist")
    }
  })
// add task if it not existed;
 
pool.query(addTasks,[task],(error,result) =>{
  if(error) throw error
  res.status(201).send("task created successfully");
})
 }

 export {getTask,getTaskByNum,addTask};