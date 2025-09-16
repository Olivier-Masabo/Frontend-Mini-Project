import { Cloud, Wind, Droplets, Eye, Gauge, Thermometer } from "lucide-react";
import { useEffect, useState } from "react";

function Weather() {
const[searching,setSearching] =useState("")
const[info,setInfo]=useState(null)
const[loading,setLoading]=useState(false)
const[error,setError]=useState("")

useEffect(() =>{
  if(searching.trim().length <3){
    setInfo([])
    setError("") 
    return;
  }
  
  const debouncing = setTimeout(() =>{
    setLoading(true)
    setError("")
    fetch("https://api.weatherxu.com").then((res) => {
      if(!res.ok)
        throw new Error("API Issue")
      return res.json()
    }).then((data) =>{
      if(!data.currently){
        setError("NO result found")
      }
      setInfo(data.result.currently)
    })    
    .catch(() => setError("Something went wrong, please try again."))
    .finally(() => setLoading(false));
  },500)
  return () =>clearTimeout(debouncing)
},[searching])
  return (
    <>
      <h2 className="bg-gradient-to-r from-blue-600 to-green-500 text-3xl font-bold text-center p-6 text-white shadow-md">
        Weather App
      </h2>

      
      <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-5 bg-gray-100">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <input
              className="border-2 border-gray-400 rounded-lg p-2 pr-16 focus:outline-none "
              placeholder="Enter location..."
              type="text"
              value={searching}
              onChange={(e) =>setSearching(e.target.value)}
            />
            <button className="absolute right-0 top-0 bottom-0 bg-gray-300 text-white px-3 hover:bg-gray-400 transition rounded cursor-pointer ">
              &#128269;
            </button>
          </div>
          {loading && <p> loading...</p>}
          {error && <p>{error}</p>}
          <button className="border-2 border-gray-700 rounded-xl px-4 py-2 hover:bg-gray-200 transition">
            Finded Location
          </button>
          <button className="border-2 border-gray-700 rounded-xl px-4 py-2 hover:bg-gray-200 transition">
            Current Location
          </button>
        </div>

        <div className="flex gap-4">
          <select className="border-2 border-gray-700 rounded-xl cursor-pointer p-2">
            <option value="dark theme">Dark Theme</option>
            <option value="white theme">White Theme</option>
          </select>

          <select className="border-2 border-gray-700 rounded-xl cursor-pointer p-2">
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
          </select>
        </div>
      </div>

      
      <div className="p-5 text-center text-gray-700">
        <h2 className="text-lg font-semibold">Kigali, Rwanda</h2>
        <p className="text-sm text-gray-500">Province: Kigali City</p>
      </div>

      
      <div className="bg-gradient-to-b from-sky-800 to-sky-900 text-white w-[90%] md:w-[70%] mx-auto p-6 rounded-2xl shadow-lg">
  <h2 className="text-2xl font-bold mb-3">Current Weather</h2>
  <p className="text-sm text-gray-300">Updated: 09:00 AM</p>

  <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
    {info && (
      <div className="text-6xl font-bold">
        <p>{info.temp_c}°C</p>
      </div>
    )}
    <div className="text-center md:text-left">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Cloud /> {info?.condition?.text}
      </h2>
      <p className="text-sm text-gray-300">Feels like {info.feelslike_c}°C</p>
    </div>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
    <div>
      <Wind className="mx-auto mb-2" />
      <h3 className="font-semibold">Wind</h3>
      <p>{info.wind_kph} km/h</p>
    </div>
    <div>
      <Droplets className="mx-auto mb-2" />
      <h3 className="font-semibold">Humidity</h3>
      <p>{info.humidity}%</p>
    </div>
    <div>
      <Eye className="mx-auto mb-2" />
      <h3 className="font-semibold">Visibility</h3>
      <p>{info.vis_km} km</p>
    </div>
    <div>
      <Gauge className="mx-auto mb-2" />
      <h3 className="font-semibold">Pressure</h3>
      <p>{info.pressure_mb} mb</p>
    </div>
    <div>
      <Thermometer className="mx-auto mb-2" />
      <h3 className="font-semibold">Dew Point</h3>
      <p>{info.dewpoint_c ?? "-"}°C</p>
    </div>
  </div>
</div>


     
      <footer className="text-center text-gray-600 mt-10 p-4 border-t">
        <p>🌍 Powered by WeatherXu API | Designed with ❤️</p>
      </footer>
    </>
  );
}

export default Weather;
