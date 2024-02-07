
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import React from 'react';

import { Routes, Route } from "react-router-dom";
import UniNaScreensharing from './pages/Uninascreensharing';

// Routing che permette il rendering del component richiesto
function App() {

  return (
    <Routes>

      <Route index element={<Home />} />

      <Route path="/" element={<Home />} />
      <Route path="/accedi" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/UniNaScreensharing" element={<UniNaScreensharing />} />

    </Routes>
  )


}




export default App;
