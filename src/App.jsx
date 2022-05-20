import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './Cadastro';
import Candidato from './Candidato';
import Devs from './Devs';
import Login from './Login';
import LoginCandidato from './LoginCandidato';
import LoginRecrutador from './LoginRecrutador';
import Perfil from './Perfil';
import Recrutador from './Recrutador';

const src = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/Devs" element={<Devs/>} />
        <Route path="/login" element={<LoginRecrutador/>} />
        <Route path="/loginCandidato" element={<LoginCandidato/>} />
        <Route path="/vagasecursos" element={<Candidato/>} />
        <Route path="/Recrutador" element={<Recrutador/>} />
      </Routes>
    </Router>
  );
}

export default src;