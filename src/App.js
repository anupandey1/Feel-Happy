import React from 'react';
import './App.css';
import {Routes, Route, Link } from "react-router-dom";
import Landing from "./components/landing";
import Jokes from './components/jokes';
import Bmi from './components/bmi';
import Atmos from './components/atmos';
function App() {
  return (
    <div className="App">
      <nav>
      <ul>
       <li><Link to="/">Home</Link></li>
       <li> <Link to="/bmi">BMI</Link></li>
       <li> <a href="https://anupandey1.github.io/Atmos/">ATMOS</a></li>
       <li> <Link to="/jokes">GIGGLES</Link></li>
       </ul>
       </nav>
      <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="bmi" element={<Bmi/>} />
          <Route path="jokes" element={<Jokes />} />
       </Routes> 
    </div>
  );
}

export default App;
