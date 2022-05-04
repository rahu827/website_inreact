import React from 'react';
import './App.css'
import Experience from './Components/Experiences/Experience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/servic/Services';
import Work from './Components/Work/Work';
 
function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Intro/>
    <Services />
    <Experience/>
    <Work/>
    </div>
  );
}

export default App;
