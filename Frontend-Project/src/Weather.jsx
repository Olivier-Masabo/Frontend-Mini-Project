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
     <div>
      <h2 className="p-5">location,province, country</h2>
     </div>
     <div className="bg-sky-900 text-white w-[80%] p-5">
     <h2>Current Weather</h2>  
     <p>time</p>
     <div className="flex gap-x-4 p-10">
      <div>
        real weather in <sup>o</sup>C
      </div>
      <div>
      <h2>Mostly cloudy</h2>
      <p>Feels like 25<sup>o</sup>C</p>
      </div>
     </div>
      <h2>Heavy rain is expected in the daytime hours. Thehigh will be 25<sup>o</sup>C</h2>
      <div className="grid grid-cols-5 md:grid-cols-3">
        <div>
          <h3>wind</h3>
          <p>6 km/h</p>
        </div>
        <div>
          <h3>Humidity</h3>
          <p>50%</p>
        </div>
        <div>
          <h3>Visibility</h3>
          <p>10km</p>
        </div>
        <div>
          <h3>Pressure</h3>
          <p>1022 mb</p>
        </div>
        <div>
          <h3>Dew pointer</h3>
          <p>12<sup>o</sup></p>
        </div>
      </div>
     </div>
      </>
    )
 }
 export default Weather