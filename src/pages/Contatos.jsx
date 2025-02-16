import React from "react";
import "./Contatos.css"; // Importa o CSS

import phoneIcon from "../img/whatsapp (1).png"; // Ícone do WhatsApp
import emailIcon from "../img/e-mail.png"; // Ícone do E-mail
import instagramIcon from "../img/instagram.png"; // Ícone do Instagram
import tiktokIcon from "../img/tiktok.png"; // Ícone do TikTok

const Contatos = () => {
  return (
    <section id="contato">
      <div className="contato-container">
        <div className="contato">Entre em Contato</div>
        
        <div className="contato-cards">
          {/* Card WhatsApp */}
          <div className="contato-card">
            <a href="https://wa.me/5524992440954?text=Olá%20gostaria%20de%20mais%20informações!" target="_blank" rel="noopener noreferrer">
              <h3><img src={phoneIcon} alt="Ícone de Celular" className="contato-icon" /> WhatsApp</h3>
              <p>(24) 99244-0954</p>
            </a>
          </div>

          {/* Card E-mail */}
          <div className="contato-card">
            <a href="mailto:rebecarosembackcontato@gmail.com">
              <h3><img src={emailIcon} alt="Ícone de E-mail" className="contato-icon" /> E-mail</h3>
              <p>rebecarosembackcontato@gmail.com</p>
            </a>
          </div>

          {/* Card Instagram - Perfil pessoal */}
          <div className="contato-card">
            <a href="https://www.instagram.com/rebecarosemback?igsh=MWRkdm9hdHc1b3Vocg==" target="_blank" rel="noopener noreferrer">
              <h3><img src={instagramIcon} alt="Ícone de Instagram" className="contato-icon" /> Instagram - Perfil pessoal</h3>
              <p>@rebecarosemback</p>
            </a>
          </div>

          {/* Card Instagram - Perfil profissional */}
          <div className="contato-card">
            <a href="https://www.instagram.com/byrosemback?igsh=MWZvdDNlNjBjNThqMw==" target="_blank" rel="noopener noreferrer">
              <h3><img src={instagramIcon} alt="Ícone de Instagram" className="contato-icon" /> Instagram - Perfil profissional</h3>
              <p>@byrosemback</p>
            </a>
          </div>

          {/* Card TikTok */}
          <div className="contato-card">
            <a href="https://www.tiktok.com/@byrosemback?_t=ZM-8tmmaB6Iljb&_r=1" target="_blank" rel="noopener noreferrer">
              <h3><img src={tiktokIcon} alt="Ícone do TikTok" className="contato-icon" /> TikTok</h3>
              <p>@byrosemback</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contatos;
