 function TodoList(){


    return(
        <>
        <div className="border bg-gradient-to-l from-green-800 to-purple-800 mt-5 mb-8 p-4 text-center rounded-xl shadow-2xl shadow-gray-300 text-white font-bold text-2xl">Welcome to My Todo list app</div>
        <div className="flex gap-x-10">
         <div className="border border-gray-600 showdow-2xl shadow-neutral-600 rounded-2xl w-[30%] h-auto text-center px-5 py-7 text-white bg-gradient-to-r from-lime-800 to-blue-800">
 
        <h1 className="font-semibold text-2xl mb-3">ToDoList app</h1>
        <p  className="text-start text-lg">This is app that was created by writting task down and you are able to add, update, delete 
             and retrive all of your task you created. this means that you can save you task permanently in database</p>

         <h2 className="text-start mt-4 mb-4 font-semibold text-xl">Overview</h2>

          <ul className="text-start">
            <li className="p-2 bg-lime-600 text-white rounded-2xl w-full mb-2">Morning run</li>
             <li className="p-2 bg-lime-600 text-white rounded-2xl w-full mb-2">breakfast</li>
            <li className="p-2 bg-lime-600 text-white rounded-2xl w-full mb-2">prepare Job</li>
          </ul>
        </div>

        <div className="border border-gray-600 showdow-2xl shadow-neutral-600 rounded-2xl w-[60%] h-auto px-5 py-7">
            <h1 className="font-semibold text-2xl mb-5">Create you list here</h1>
            <input className="border border-gray-500 py-3 px-2 outline-hidden w-[45%] rounded-l-lg" type="text" placeholder="Enter task here..." />
            <button className=" cursor-pointer border border-gray-500 py-3 px-3 bg-green-600 text-md hover:bg-green-400 text-white ">Add</button>
        </div>
        
        </div>
        </>
    )
 }

 export default TodoList;