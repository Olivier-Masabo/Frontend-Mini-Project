import { useState } from "react";

 function TodoList(){

  const[task,setTask] = useState([])
  const[newTask,setNewTask] = useState("")

  function handleInput(event){
    setNewTask(event.target.value);
  }
   function addTask(){
    if(newTask ==="" || newTask === null)return false;
    setTask(item =>[...item,newTask])
    setNewTask("")
   }
   function deletebtn(index){
    const deleting =task.filter((_,i) =>i !==index);
    setTask(deleting)
   }

    return(
        <>
        <div className="border bg-gradient-to-l from-green-800 to-purple-800 mt-5 mb-8 p-4 text-center rounded-xl shadow-2xl shadow-gray-300 text-white font-bold text-2xl">Welcome to My To-Do-List  app</div>
        <div className="flex gap-x-10">
         <div className="border border-gray-600 showdow-2xl shadow-neutral-600 rounded-2xl w-[30%] h-auto text-center px-5 py-7 text-white bg-gradient-to-r from-lime-800 to-blue-800">
 
        <h1 className="font-semibold text-2xl mb-3">To-Do-List app</h1>
        <p  className="text-start text-lg">This is app that was created by writting task down and you are able to add, update, delete 
             and retrive all of your task you created. this means that you can save you task permanently in database</p>

         <h2 className="text-start mt-4 mb-4 font-semibold text-xl">Overview</h2>

          <ul className="text-start">
            <li className="p-2 bg-lime-600 text-white rounded-xl w-full mb-2">Morning run</li>
             <li className="p-2 bg-lime-600 te{xt-white rounded-xl w-full mb-2">breakfast</li>
            <li className="p-2 bg-lime-600 text-white rounded-xl w-full mb-2">prepare Job</li>
          </ul>
        </div>

        <div className="border border-gray-600 showdow-2xl shadow-neutral-600 rounded-2xl w-[65%] h-auto px-5 py-7 text-center">
            <h1 className="font-semibold text-2xl mb-5">Create your list here</h1>
            <input value={newTask} onChange={handleInput} className="border border-gray-500 py-3 px-2 outline-hidden w-[57%] rounded-l-lg" type="text" placeholder="Enter task here..." />
            <button  onClick={addTask} className=" cursor-pointer border border-gray-500 py-3 px-3 bg-green-600 text-md hover:bg-green-400 text-white ">Add</button>
        <div>

        <ol className="w-full flex flex-col items-center">
          {task.map((element,index) => 
          <li className="bg-gray-100 shadow-xl py-3 px-2 shadow-gray-200 w-[64%] mt-3 text-lg rounded-xl flex justify-between" key={index}>
            <span>{element}</span>
            <div className="flex justify-evenly">
            <button className="cursor-pointer ml-10 p-1 hover:bg-gray-300">🖋️</button>
            <button onClick={() =>deletebtn(index)} className="cursor-pointer ml-3 p-1 hover:bg-gray-300">❌</button>
            </div>
          </li>
          )}
        </ol>
          </div>
          
        
        </div>
        </div>
        <div>
         <div className="w-[40%] mt-10 px-10 py-2 bg-green-500 text-center text-xl font-semibold text-white rounded-xl">Get all your task here</div>
        </div>
        </>
    )
 }

 export default TodoList;