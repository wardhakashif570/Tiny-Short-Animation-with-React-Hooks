import React from 'react';
import {Navbar} from './Components/navbar';
import {Display1} from './Components/display1';
import {Display2} from './Components/display2';
import {Display3} from './Components/display3';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Display1/>
      <Display2/>
      <Display3/>
    </div>
  );
}

export default App