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

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-10">
        {/* About Me Card */}
        <div className="p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I’m a passionate <span className="font-semibold text-blue-700">frontend developer</span> 
            building user-friendly and responsive web apps.  
            Skilled in{" "}
            <span className="font-semibold text-blue-600">
              HTML, CSS, Tailwind, JavaScript, React.js
            </span>  
            and currently exploring{" "}
            <span className="font-semibold text-green-600">Node.js & databases</span> 
            to grow as a full-stack developer.  
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            My goal is to keep improving by solving challenges, building real-world 
            projects, and learning modern tools to create professional apps.
          </p>
        </div>

        
        <div className="p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tech & Goals</h2>

          {/* Tech Stack */}
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Tech Stack</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>React.js & JavaScript (Frontend)</li>
            <li>Tailwind CSS (Styling)</li>
            <li>Node.js (Basics, backend learning)</li>
            <li>PostgreSQL / Databases (exploring)</li>
          </ul>

          
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Learning Goals</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Master full-stack development</li>
            <li>Improve UI/UX design skills</li>
            <li>Build projects that solve real problems</li>
            <li>Contribute to open-source in the future</li>
          </ul>
        </div>
      </div>


      
  
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App
