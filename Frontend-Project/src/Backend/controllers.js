 import pool from "./database.js"
 import {getTaskQuery,getTaskByNumber,checkTaskExistance,addTasks,removeTask} from "./queries.js";


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



const addTask = (req, res) => {
  const { task } = req.body;

  pool.query(checkTaskExistance, [task], (error, result) => {
    if (error) throw error;

    if (result.rows.length) {
      return res.status(400).send("Task already exists");
    }

    pool.query(addTasks, [task], (error2) => {
      if (error2) throw error2;
      res.status(201).send("Task created successfully");
      console.log("Task created successfully");
    });
  });
};



const remove = (req, res) => {
  const number = parseInt(req.params.number);
   console.log(number)
  pool.query(getTaskByNumber,[number],(error, results) => {
    if (error) throw error;
    if (results.rows.length === 0) {
      return res.status(404).send("Task does not exist");
    }

    pool.query(removeTask,[number],(error) => {
      if (error) throw error;
      res.status(200).send("Task deleted successfully");
      console.log("Task deleted successfully");
    });
  });
};


 export {getTask,getTaskByNum,addTask,remove};