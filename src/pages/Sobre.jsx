import React from "react";
import "./sobre.css"; // CSS separado para a seção
import foto1 from '../img/sobre.jpeg';

const Sobre = () => {
  return (
    <section id="sobre">
      <div className="sobre-container">
        <h1 className="rebeca">Sobre mim</h1>
        
        <p>
          Apaixonada por literatura, cinema e teatro desde cedo, escrevi meu primeiro livro, <strong>Coração Imortal</strong>, aos 12 anos e publiquei sua versão final aos 20, em 2023. Depois dele, vieram outros livros digitais, todos disponíveis aqui no site.
        </p>

        <p>
          Minha trajetória também se conecta com a comunicação: curso Letras e Publicidade & Propaganda, áreas que me permitem unir a escrita, a criatividade e o olhar estratégico. Além disso, atuo como social media e desenvolvo projetos de marketing literário, produção de conteúdo e vídeos, sempre com o objetivo de transformar ideias em narrativas envolventes.
        </p>

        <p>
          Acredito que a arte é uma forma de enxergar o mundo com mais profundidade e beleza. Por isso, cada projeto que crio, seja um livro, uma campanha ou um vídeo, nasce do desejo de compartilhar essa visão e inspirar outras pessoas.
        </p>

        <p>
          Se você também gosta de mergulhar na magia da arte e da comunicação, está no lugar certo.
        </p>

        {/* Espaço para a foto */}
        <div className="sobre-foto">
          <img src={foto1} alt="Rebeca Rosemback" className="foto-rebeca" />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
