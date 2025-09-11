import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";
import Livro from "./pages/livro";
import Servicos from "./pages/servicos";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/livro" element={<Livro />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
