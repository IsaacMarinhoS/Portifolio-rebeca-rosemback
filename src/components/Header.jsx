import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"; // Se estiver usando CSS separado

function Header() {
  const location = useLocation(); // Obtém a rota atual

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">Rebeca Rosemback</Link>

      <nav className="nav-links">
        {location.pathname === "/sobre" ? (
          <Link to="/" className="nav-link">Voltar</Link>
        ) : (
          <Link to="/sobre" className="nav-link">Sobre</Link>
        )}

        {location.pathname === "/contatos" ? (
          <Link to="/" className="nav-link">Voltar</Link>
        ) : (
          <Link to="/contatos" className="nav-link">Contatos</Link>
        )}

        {location.pathname === "/livro" ? (
          <Link to="/" className="nav-link">Voltar</Link>
        ) : (
          <Link to="/livro" className="nav-link">Livros</Link>
        )}
        {location.pathname === "/servicos" ? (
          <Link to="/" className="nav-link">Voltar</Link>
        ) : (
          <Link to="/servicos" className="nav-link">Serviços</Link>
        )}

      </nav>
    </header>
  );
}

export default Header;
