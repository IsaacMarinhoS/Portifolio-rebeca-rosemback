import React from 'react';
import './livro.css'; // Importando o arquivo CSS
import imagemCoracaoImortal from '../img/Captura de tela 2025-02-05 223643.png';
import imagemBatidasCoracao from '../img/Screenshot_20250207-133958 (1).png';
import imagemDiarioPesadelos from '../img/Screenshot_20250207-134022.png';
import imagemFadaColorado from '../img/Screenshot_20250207-134126.png';

const livros = [
  {
    titulo: 'Coração Imortal',
    descricao: 'Para que uma nova criatura nasça é preciso que a Gaia se contorça, grite e perca o equilíbrio. Henry nunca ligou para o equilíbrio. Ele invocou as criaturas dos céus e do inferno para renascer dentro de forças jamais vistas.\n\nA Gaia gritou. Henry abriu as portas para uma grande ameaça imortal que poderia derrubar toda a raça humana: o vampiro. O equilíbrio se propagou em míseras fagulhas que se desmancharam no ar e nada mais seria o mesmo.\n\nA expansão das novas criaturas fez com que a própria Gaia pedisse socorro e, em um ato de misericórdia, forças desconhecidas permitiram se desenvolver algo muito maior que Henry – Uma fusão.',
    idioma: 'Português',
    idade: '14+',
    paginas: '192 páginas',
    imagem: imagemCoracaoImortal,
    ano: '2023',
    linkDigital: 'https://a.co/d/0T97Bm1',
    linkFisico: 'https://wa.me/5524992440954?text=Olá%20gostaria%20de%20mais%20informações!'
  },
  {
    titulo: 'As Batidas do Meu Coração',
    descricao: '"As batidas do meu coração" é um conjunto de poemas românticos escritos ao longo da vida da autora dedicado a diversas pessoas diferentes, passando uma nova imagem para o significado da palavra "amor".',
    idioma: 'Português',
    idade: '13+',
    paginas: '15 páginas',
    imagem: imagemBatidasCoracao,
    ano: '2022',
    linkDigital: 'https://www.wattpad.com/story/312120179?utm_source=android&utm_medium=link&utm_content=story_info&wp_page=story_details_button&wp_uname=RebecaRosemback'
  },
  {
    titulo: 'Diário de Pesadelos',
    descricao: '"Diário de pesadelos" é um livro curto de contos de terror inspirados em pesadelos tidos em uma época sombria da vida da autora, onde todos os seus medos e pesadelos se transformaram em arte.',
    idioma: 'Português',
    idade: '15+',
    paginas: '12 páginas',
    imagem: imagemDiarioPesadelos,
    ano: '2022',
    linkDigital: 'https://www.wattpad.com/story/308412809?utm_source=android&utm_medium=link&utm_content=story_info&wp_page=story_details_button&wp_uname=RebecaRosemback'
  },
  {
    titulo: 'A Fada do Colorado',
    descricao: '"A fada do Colorado" é um mini conto infantojuvenil que fala sobre como uma amizade real é capaz de te salvar dos piores perigos ao longo de sua vida.',
    idioma: 'Português',
    idade: 'Livre',
    paginas: '3 páginas',
    imagem: imagemFadaColorado,
    ano: '2022',
    linkDigital: 'https://www.wattpad.com/story/314918057?utm_source=android&utm_medium=link&utm_content=story_info&wp_page=story_details_button&wp_uname=RebecaRosemback'
  }
];

const Livro = () => {
  return (
    <div className="livros-container">
      {livros.map((livro, index) => (
        <div key={index} className="produto-container">
          <div className="produto-imagem">
            <img src={livro.imagem} alt={`Imagem do livro ${livro.titulo}`} />
          </div>
          <div className="produto-info">
            <h1>{livro.titulo}</h1>
            <p className="descricao">{livro.descricao}</p>
            <div className="detalhes">
              <p><strong>Idioma:</strong> {livro.idioma}</p>
              <p><strong>Idade de Leitura:</strong> {livro.idade}</p>
              <p><strong>Número de Páginas:</strong> {livro.paginas}</p>
              <p><strong>Ano:</strong> {livro.ano}</p>
            </div>

            {/* Botão de compra aparece apenas no primeiro livro se houver um link físico */}
            {livro.linkFisico && (
              <a href={livro.linkFisico} target="_blank" rel="noopener noreferrer" className="botao-comprar">
                Comprar Livro Físico
              </a>
            )}

            {/* Botão de livro digital com link específico para cada livro */}
            <a href={livro.linkDigital} target="_blank" rel="noopener noreferrer" className="botao-saiba-mais">
              Livro Digital
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Livro;
