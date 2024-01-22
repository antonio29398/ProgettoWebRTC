
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import React from 'react';


import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>

      <Route index element={<Home />} />

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  )


}




export default App;
