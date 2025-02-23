import React from "react";
import './Home.css';

// Importando as imagens de redes sociais corretamente
import instagramIcon from '../img/instagram.png';
import facebook from '../img/whatsapp (1).png';
import imagemAutora from '../img/foto.jpg';

function Home() {
  return (
    <body className="tela">
      {/* Contêiner flex que vai alinhar o texto e a imagem lado a lado */}
      <div className="introducao-container">
        {/* Contêiner do texto */}
        <div className="introducao">
          <div className="texto">
            <p className="welcome-text">
              <strong>Oi, pessoas! Bem-vindas ao meu espaço!</strong>
            </p>
            <p>
            Esse é o seu ponto de encontro com o meu mundo que envolve meu amor por literatura, cinema e teatro. Descubra meus livros físicos e digitais e mergulhe em um espaço dedicado à arte, onde tudo o que é belo ganha vida.
            </p>

            {/* Redes sociais */}
            <div className="social-icons">
              <a href="https://www.instagram.com/rebecarosemback?igsh=MWRkdm9hdHc1b3Vocg==" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://wa.me/5524992440954?text=Olá%20gostaria%20de%20mais%20informações!" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Colocando a imagem ao lado do texto */}
        <div className="imagem">
          <img src={imagemAutora} alt="Rebeca Rosemback" />
        </div>
      </div>
    </body>
  );
}

export default Home;
