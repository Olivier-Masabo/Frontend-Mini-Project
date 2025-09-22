import { Cloud, Wind, Droplets, Eye, Gauge, Thermometer } from "lucide-react";
import { useEffect, useState } from "react";

function Weather() {
  const [searching, setSearching] = useState("");
  const [info, setInfo] = useState(null);
  const [location, setLocation] = useState(null); // city + country
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "6ddb7f1c400348e980464324252209"; // 🔑 your WeatherAPI key

  // 🔹 Fetch function (city name or lat,long)
  const fetchWeather = (query) => {
    if (!query) return;
    setLoading(true);
    setError("");
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=no`
    )
      .then((res) => {
        if (!res.ok) throw new Error("API Issue");
        return res.json();
      })
      .then((data) => {
        setInfo(data.current);
        setLocation(data.location);
      })
      .catch(() => setError("❌ Something went wrong, please try again."))
      .finally(() => setLoading(false));
  };

  // 🔹 Search effect (typing city)
  useEffect(() => {
    if (searching.trim().length < 3) return;

    const debouncing = setTimeout(() => {
      fetchWeather(searching);
    }, 500);

    return () => clearTimeout(debouncing);
  }, [searching]);

  // 🔹 On mount → detect device location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchWeather(`${latitude},${longitude}`);
        },
        () => fetchWeather("Kigali") // fallback if blocked
      );
    } else {
      fetchWeather("Kigali");
    }
  }, []);

  return (
    <>
      <h2 className="bg-gradient-to-r from-blue-600 to-green-500 text-3xl font-bold text-center p-6 text-white shadow-md">
        Weather App
      </h2>

      {/* 🔹 Search Section */}
      <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-5 bg-gray-100">
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <input
              className="border-2 border-gray-400 rounded-lg p-2 pr-16 focus:outline-none w-full md:w-72"
              placeholder="Enter location..."
              type="text"
              value={searching}
              onChange={(e) => setSearching(e.target.value)}
            />
            <button
              onClick={() => fetchWeather(searching)}
              className="absolute right-0 top-0 bottom-0 bg-gray-300 text-white px-3 hover:bg-gray-400 transition rounded cursor-pointer"
            >
              🔍
            </button>
          </div>

          {/* 🔹 Loading & Error BELOW input */}
          {loading && <p className="text-blue-600 text-sm">Loading...</p>}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* 🔹 Buttons for Finded & Current Location */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={() => fetchWeather(searching)}
              className="border-2 border-gray-700 rounded-xl px-4 py-2 hover:bg-gray-200 transition"
            >
              Finded Location
            </button>

            <button
              onClick={() => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                    (pos) => {
                      const { latitude, longitude } = pos.coords;
                      fetchWeather(`${latitude},${longitude}`);
                    },
                    () => fetchWeather("Kigali") // fallback
                  );
                } else {
                  fetchWeather("Kigali");
                }
              }}
              className="border-2 border-gray-700 rounded-xl px-4 py-2 hover:bg-gray-200 transition"
            >
              Current Location
            </button>
          </div>
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

      {/* 🔹 Location Info */}
      {location && (
        <div className="p-5 text-center text-gray-700">
          <h2 className="text-lg font-semibold">
            {location.name}, {location.country}
          </h2>
          <p className="text-sm text-gray-500">Region: {location.region}</p>
        </div>
      )}

      {/* 🔹 Weather Info */}
      {info && (
        <div className="bg-gradient-to-b from-sky-800 to-sky-900 text-white w-[90%] md:w-[70%] mx-auto p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Current Weather</h2>
          <p className="text-sm text-gray-300">Updated: {location.localtime}</p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
            <div className="text-6xl font-bold">
              <p>{info.temp_c}°C</p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Cloud /> {info.condition.text}
              </h2>
              <p className="text-sm text-gray-300">
                Feels like {info.feelslike_c}°C
              </p>
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
              <h3 className="font-semibold">Feels Like</h3>
              <p>{info.feelslike_c}°C</p>
            </div>
          </div>
        </div>
      )}

      <footer className="text-center text-gray-600 mt-10 p-4 border-t">
        <p>🌍 Powered by WeatherAPI | Designed with ❤️</p>
      </footer>
    </>
  );
}

export default Weather;
