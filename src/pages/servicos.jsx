import React from "react";
import "./servicos.css";

function Servicos() {
  return (
    <div className="servicos-container">
      <div className="servicos-intro">
        <h1>Aqui eu transformo ideias em histórias que funcionam de verdade.</h1>
      </div>

      <div className="servico-card">
        <h2>Social Media & Comunicação</h2>
        <p>
          Gestão de redes, criação de calendários e consultoria estratégica. Tudo
          pensado para sua marca ou projeto crescer de forma organizada e criativa.
        </p>
      </div>

      <div className="servico-card">
        <h2>Marketing Literário</h2>
        <p>
          Revisão de textos, leitura crítica e acompanhamento completo de lançamentos,
          do pré ao pós, incluindo o dia do evento.
        </p>
      </div>

      <div className="servico-card">
        <h2>Criação de Conteúdo & Vídeo</h2>
        <p>
          Roteiros digitais e videomaker mobile para marcas, empreendedores e eventos
          de todos os tamanhos. Conteúdos que engajam e contam histórias com propósito.
        </p>
      </div>

      <div className="whatsapp-container">
        <p>Quer começar agora?</p>
        <a
          href="https://wa.me/5524992440954?text=Olá%20gostaria%20de%20mais%20informações!"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Fale comigo no WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Servicos;
