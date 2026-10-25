import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/NavBar/Navbar.js";
import "./App.css";
import { ToastContainer } from 'react-toastify';


import Equipes from "./pages/Equipes/Equipes.js";
import Projetos from "./pages/Projetos/Projetos.js";
import Sobre from "./pages/Sobre/Sobre.js";
import Galeria from "./pages/Galeria/Galeria.js";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/projetos/filtro" element={<Projetos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;