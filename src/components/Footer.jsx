import React from "react";
import "./Footer.css";
import footerImg from "/public/logo.png"; // ajuste o caminho conforme sua pasta

function Footer() {
  return (
    <footer className="footer">
      <img src={footerImg} alt="Footer padrão" />
    </footer>
  );
}

export default Footer;
