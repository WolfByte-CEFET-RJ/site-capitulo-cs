import React, {useState} from 'react';
import './Equipes.css';
import Footer from"../../componentes/Footer/Footer.js"
import weblogo from "../../assets/web-logo.jpg"
import ialogo from "../../assets/ia-logo.jpg"
import gameslogo from "../../assets/games-logo.jpg"
import marketinglogo from "../../assets/marketing-logo.jpg"
import hardwarelogo from "../../assets/hardware-logo.jpg"
import { useNavigate } from 'react-router-dom';
import {ArrowCircleRight, ArrowCircleLeft} from "phosphor-react"


const equipes = [
  {
    nome: 'Web/App',
    logo: weblogo,
    descricao: `
    Equipe voltada para desenvolvimento de software para web ou mobile, com uma stack de tecnologias diversificada. Lida desde a documentação até a programação.
    `,
    cores: { esquerda: '#1267a8', direita: '#1267a8' },
  },
  {
    nome: 'IA/BOT',
    logo: ialogo,
    descricao: `
    Equipe voltada para pesquisa e construção de modelos de inteligência artificial, machine learning e BOTS.
    `,
    cores: { esquerda: '#1f9d55', direita: '#1f9d55' },
  },
  {
    nome: 'Games',
    logo: gameslogo,
    descricao: `Equipe voltada para desenvolvimento de jogos, desde sua concepção, enredo, arte e programação.
    `,
    cores: { esquerda: '#d93f4a', direita: '#d93f4a' },
  },
  {
    nome: 'Hardware',
    logo: hardwarelogo,
    descricao: `Equipe voltada para pesquisa e construção de componentes, ou conjunto de componentes, de computadores, consoles e dispositivos eletrônicos em geral`,
    cores: { esquerda: '#f2b800', direita: '#f2b800' },
  },
  {
    nome: 'Marketing',
    logo: marketinglogo,
    descricao: `Equipe voltada para comunicação e identidade visual do capítulo: redes sociais, design, divulgação de eventos e relacionamento com parcerias.`,
    cores: { esquerda: '#14171a', direita: '#14171a' },
  },
];

function Equipe() {

  const navigate = useNavigate()
  
  const [index, setIndex] = useState(0);

  const nextEquipe = () => {
    setIndex((prevIndex) => (prevIndex + 1) % equipes.length);
  };

  const prevEquipe = () => {
    setIndex((prevIndex) => (prevIndex - 1 + equipes.length) % equipes.length);
  };

  const { nome, logo, descricao, projetos, cores } = equipes[index];

  return (
    <div className='equipe-align'>
      <h1 className='explore'>Explore nossas áreas de atuação</h1>
      <div className="equipe-page">
        <div
          className="carrossel-esquerda"
          style={{ '--accent': cores.esquerda }}
        >
          <div>
          <div className="carrossel-logo-container">
            <button onClick={prevEquipe} className="nav-arrow" aria-label="Área anterior"><ArrowCircleLeft size={24}/></button>
            {logo && <img src={logo} alt={nome} className="logo-equipe" />}
            <button onClick={nextEquipe} className="nav-arrow" aria-label="Próxima área"><ArrowCircleRight size={24}/></button>
          </div>
          <h3 className="nome-equipe">{nome}</h3>
          <p>Área {index+1} de {equipes.length}</p>
        </div>
          </div>
        
        <div
          className="carrossel-direita"
        >
          <div style={{gap: 5}}>
            <div className="description">{descricao}</div>
            <button className="btn" onClick={()=>{navigate(`/projetos/filtro?equipe=${equipes[index].nome}`)}}>Ver Projetos</button>
          </div>
  
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Equipe;
