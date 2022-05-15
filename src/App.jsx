import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './Cadastro';
import Candidato from './Candidato';
import JaSou from './JaSou';
import Login from './Login';
import Recrutador from './Recrutador';

const src = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/login" element={<JaSou/>} />
        <Route path="/Candidato" element={<Candidato/>} />
        <Route path="/Recrutador" element={<Recrutador/>} />
      </Routes>
    </Router>
  );
}

export default src;