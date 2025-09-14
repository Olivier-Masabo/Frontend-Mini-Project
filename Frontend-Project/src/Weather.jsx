 function Weather(){


    return(
      <>
      <h2 className="bg-green-500 text-2xl font-bold text-center p-5 text-white mt-10 w-full mx-auto">Weather app</h2>
     <div className="p-5 flex items-center justify-between">
        <div>
       <input className="border-2 border-zinc-900 rounded p-2" type="text" /><span className="border-2 p-2 border-zinc-900 rounded ">Search</span>

       <button className="border-2 border-black rounded-2xl cursor-pointer p-2 ml-5 ">finded location</button>
       <button className="border-2 border-black rounded-2xl cursor-pointer p-2 ml-5">current location</button>
        </div>
       <div>
        <select  className="border-2 border-black rounded-2xl cursor-pointer p-2 " > theme
            <option  value="dark theme"> dark theme</option>
             <option  value="white theme"> white theme</option>
        </select>

        <select  className="border-2 border-black rounded-2xl cursor-pointer p-2 ml-5 " >
            <option  value="dark theme">Celcius</option>
             <option  value="white theme"> Fahrenheit</option>
        </select>
        
       </div>
     </div>
      </>
    )
 }
 export default Weather