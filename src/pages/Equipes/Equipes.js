import React, {useState} from 'react';
import './Equipes.css';
import Footer from"../../componentes/Footer/Footer.js"
import webicon from "../../assets/web-icon.png"
import iaicon from "../../assets/ia-icon.png"
import gamesicon from "../../assets/game-icon.png"
import hardicon from "../../assets/hard-icon.png"
import marketingIcon from "../../assets/marketing-icon.svg"
import { useNavigate } from 'react-router-dom';
import {ArrowCircleRight, ArrowCircleLeft} from "phosphor-react"


const equipes = [
  {
    nome: 'Web/App',
    logo: webicon,
    descricao: `
    Equipe voltada para desenvolvimento de software para web ou mobile, com uma stack de tecnologias diversificada. Lida desde a documentação até a programação.
    `,
    cores: {
      esquerda: '#0693ba',
      direita: '#0693ba',
    },
  },
  {
    nome: 'IA/BOT',
    logo: iaicon,
    descricao: `
    Equipe voltada para pesquisa e construção de modelos de inteligência artificial, machine learning e BOTS.
    `,
    cores: {
      esquerda: '	#00FF00',
      direita: '	#00FF00',
    },
  },
  {
    nome: 'Games',
    logo: gamesicon,
    descricao: `Equipe voltada para desenvolvimento de jogos, desde sua concepção, enredo, arte e programação.
    `,
    cores: {
      esquerda: '#FF0000',
      direita: '#FF0000',
    },
  },
  {
    nome: 'Hardware',
    logo: hardicon,
    descricao: `Equipe voltada para pesquisa e construção de componentes, ou conjunto de componentes, de computadores, consoles e dispositivos eletrônicos em geral`,
    cores: { 
      esquerda: 'rgb(226, 226, 13) ',
      direita: '	rgb(226, 226, 13) ',
    },
  },
  {
    nome: 'Marketing',
    logo: marketingIcon,
    descricao: `Equipe responsável por planejar a comunicação do capítulo, divulgar projetos e eventos e fortalecer a presença do Computer Society.`,
    cores: {
      esquerda: '#f28c28',
      direita: '#f28c28',
    },
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
          style={{ borderColor: cores.esquerda }}
        >
          <div>
          <div className="carrossel-logo-container">
            <div onClick={prevEquipe} className="nav-arrow"><ArrowCircleLeft size={24}/></div>
            {logo && <img src={logo} alt={nome} className="logo-equipe" />}
            <div onClick={nextEquipe} className="nav-arrow"><ArrowCircleRight size={24}/></div>
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
            <button style={{padding: 5}} onClick={()=>{navigate(`/projetos/filtro?equipe=${equipes[index].nome}`)}}>Ver Projetos</button>
          </div>
  
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Equipe;
