import React from "react";
import "./sobre.css"; // Se você tiver um CSS separado para personalizar a seção
import foto1 from '../img/IMG_0560.jpg';

const Sobre = () => {
  return (
    <section id="sobre">
      <div className="sobre-container">
        <h1 className="rebeca">Sobre Rebeca Rosemback</h1>
        <p>
        Oi, pessoas! Aqui você descobre um pouquinho mais sobre mim. 
        
        </p>
        <p>
        Eu sou a Rebeca, apaixonada por literatura, cinema e teatro desde que me entendo por gente. Escrevi meu primeiro livro (Coração Imortal) aos 12 anos de idade e o lancei aos 20, em 2023.  Depois dele, vieram alguns livros digitais que vocês podem acessar aqui nesse site. 
  Estou cursando duas faculdades: Letras e Publicidade & Propaganda, uma iniciada em 2024 e a outra em 2025. Quando concluir as duas, pretendo entrar para cinema e mergulhar também nessa área que tanto amo.
 Sou apaixonada pela arte como um todo, sempre tento compartilhar com as pessoas ao meu redor a minha visão de mundo, permitindo que elas consigam enxergar a mesma beleza que vejo nesse mundão. Então, se você gosta de mergulhar na magia artística, você está no lugar certo! Sejam bem-vindos ao meu mundo.
        </p>
       
        {/* Espaço para a foto */}
        <div className="sobre-foto">

            <img src={foto1} alt="Instagram"
            className="foto-rebeca" />
          
        </div>
      </div>
    </section>
  );
};

export default Sobre;
