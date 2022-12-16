import React from 'react';
import './App.css';
import Animals from './components/dogs';
import Jokes from './components/jokes';
import Bmi from './components/bmi';
function App() {
  return (
    <div className="App">
    <Bmi/>
    {/* <Animals/> */}
    </div>
  );
}

export default App;
