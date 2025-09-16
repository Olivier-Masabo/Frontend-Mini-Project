import { Routes,Route,Link } from 'react-router-dom'
import './App.css'
import Calculator from './calculator'
import Weather from './Weather'

function App() {

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 flex justify-center mx-auto">My Projects</h1>

      <nav className="flex gap-4 mb-6">
        <Link to="/calculator" className="text-blue-900 font-bold text-xl hover:underline">
          Calculator
        </Link>
        <Link to="/weather" className="text-blue-900 font-bold text-xl hover:underline">
          Weather-App
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto mb-10 p-6 bg-white shadow-lg rounded-2xl mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed">
          I’m a passionate <span className="font-semibold text-blue-700">frontend developer</span> who is 
          continuously improving skills and building real-world projects.  
          I have hands-on experience with technologies like{" "}
          <span className="font-semibold text-blue-600">HTML, CSS, Tailwind CSS, JavaScript, React.js</span>,  
          and I’m exploring <span className="font-semibold text-green-600">Node.js and databases</span> to become a full-stack developer.  
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          My focus is on creating clean, user-friendly, and responsive web 
          applications while constantly learning best practices and modern tools 
          to sharpen my craft.
        </p>
      </div>

      
  
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App
