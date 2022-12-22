import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './assets/WebTitle.svg';
import Landing from './components/landing';
import Jokes from './components/jokes';
import Bmi from './components/bmi';

function App() {
  return (
    <div className="nav">
      <nav >
        <ul>
          <div className="flex justify-between items-center ">
            <li>
              <img src={logo} className="w-44 h-16 ml-5" />
            </li>
            <div className="flex flex-row text-xl font-sans font-semibold">
              <li className="mx-5 my-3 hover:scale-125 hover:underline">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-5 my-3 hover:scale-125 hover:underline ">
                <Link to="/bmi">Bmi</Link>
              </li>
              <li className="mx-5 my-3 hover:scale-125 hover:underline">
                <a href="https://anupandey1.github.io/Atmos/">Atmos</a>
              </li>
              <li className="mx-5 my-3 hover:scale-125 hover:underline">
                <Link to="/jokes">Giggles</Link>
              </li>
            </div>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="bmi" element={<Bmi />} />
        <Route path="jokes" element={<Jokes />} />
      </Routes>
    </div>
  );
}

export default App;