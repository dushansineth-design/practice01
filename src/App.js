import './App.css';
import React from 'react'
//import Home from './Pages/Home';
//import About from './Pages/About';
//import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
//import Contact from './Pages/Contact';
//import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home1 from './Home1'
//import Contact from './Contact'
import About from './About'
import Profile from './profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (    
    <div>
      <h1>Static Content</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
      
    </div>


  );
}

export default App;
