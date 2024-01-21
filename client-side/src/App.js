
import './App.css';
import Home from './Home'
import Login from './Login'
import Register from './Register'
import React from 'react';
// import logo from './immagini/logo-uni.png';





import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>

      <Route path="/" element={<Home/> }/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
  )

    
  }


 

export default App;
