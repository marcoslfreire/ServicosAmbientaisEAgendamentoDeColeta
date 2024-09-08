// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agendamento from './pages/Agendamento';
import Acompanhamento from './pages/Acompanhamento';
import Mapa from './components/Mapa';
import Login from './pages/Login'; // Atualize o caminho para o Mapa
import Cadastrar from './pages/Cadastrar'; 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agendamento" element={<Agendamento />} />
      <Route path="/acompanhamento" element={<Acompanhamento />} />
      <Route path="/mapa" element={<Mapa />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/cadastrar" element={<Cadastrar />}/>
    </Routes>
  );
}

export default App;
