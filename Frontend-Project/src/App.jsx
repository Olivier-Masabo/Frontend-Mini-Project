import { Routes,Route,Link } from 'react-router-dom'
import './App.css'
import Calculator from './calculator'
import Weather from './Weather'
import Home from './Home'

function App() {

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 flex justify-center mx-auto">My Projects</h1>

      <nav className="flex gap-4 mb-6">
        <Link to="/Home" className=" font-bold text-xl hover:underline text-red-500">
          Intro
        </Link>
        <Link to="/calculator" className="text-blue-900 font-bold text-xl hover:underline">
          Calculator
        </Link>
        <Link to="/weather" className="text-blue-900 font-bold text-xl hover:underline">
          Weather-App
        </Link>
      </nav>

      <Routes>
        <Route path ="home" element={<Home/>}/>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>



      
  
      
    </div>
  );
}

export default App
