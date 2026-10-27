import React, { useState, useEffect, useCallback } from "react";
import { MagnifyingGlass } from 'phosphor-react';
import ProjectCard from '../../componentes/Cards/CardProject';
import './Projetos.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from "../../componentes/Footer/Footer.js"
import { toast } from "react-toastify";
import { X, Eraser } from 'phosphor-react';



function Projetos() {

  const [projetos] = useState([
    {
      name: "Site Do Ramo",
      description: "Site de inscrição e divulgação do Ramo Estudantil IEEE CEFET/RJ.",
      team: "Web/App",
      status: "Finalizado",
      type: "Projeto",
      link: "https://www.ramoieeecefetrj.com.br/",
      about: "O Site do Ramo é o principal canal de divulgação do Ramo Estudantil - IEEE - CEFET/RJ. Nele,  são descritos todas as informações sobre a extensão, história, valores, missão, equipes, projetos, etc. Além da divulgação, é pelo website que estudantes do CEFET/RJ se inscrevem no Processo Seletivo Externo do Ramo Estudantil e demonstram interesse em ser membros. Através dele, os Coordenadores das Equipes (Chair) podem atualizar informações sobre seus capítulos e a Diretoria pode agendar processos seletivos.",
      membros: [
        { nome: "Ana Beatriz Caldas", contato: "" },
        { nome: "Arthur Duarte", contato: "" },
        { nome: "Cleyton Prado", contato: "" },
        { nome: "Gustavo Andrade", contato: "gustavoandrade0125@gmail.com" },
        { nome: "Sarah Campos", contato: "" },
        { nome: "Luiz Antrônio", contato: "" }
      ]
    },
    {
      name: "Smart Garden",
      description: "Software de gerenciamento de hortas automatizadas. Parceria com capítulo PES/CEFET-RJ",
      team: "Web/App",
      status: "Finalizado",
      type: "Projeto",
      link: "https://github.com/WolfByte-CEFET-RJ/Web-Irrigador_automatico_application/tree/master",
      about: "Parceria com o PES/CEFET-RJ, é um software de gerenciamento de hortas automatizadas que integra princípios da sustentabilidade e desenvolvimento de software. A solução foi projetada como uma aplicação versátil que funciona como central de processamento, monitoramento e controle remoto da irrigação das plantações, utilizando sensores de umidade integrados via protocolo MQTT, caracterizando-se como um sistema IoT. A metodologia adotada envolveu o uso de tecnologias de desenvolvimento de baixo custo e banco de dados para armazenamento e análise dos dados coletados. Os resultados alcançados demonstram que a harmonia entre sustentabilidade e programação pode ser alcançada visando o benefício do usuário. Conclui-se que o Smart Garden é uma ferramenta viável e de impacto social positivo desde sua concepção até sua implantação, promovendo a aproximação entre tecnologia e práticas sustentáveis.",
      membros: [
        { nome: "Ana Beatriz Caldas", contato: "" },
        { nome: "Arthur Coutto", contato: "" },
        { nome: "Cleyton Prado", contato: "" },
        { nome: "Gustavo Andrade", contato: "gustavoandrade0125@gmail.com" },
        { nome: "Rhyan Pinto", contato: "" },
        { nome: "Isabela Rocha", contato: "" },
        { nome: "João Terêncio", contato: "" },
        { nome: "Bianca Gallichio", contato: "" },
        { nome: "Matheus Figueiredo", contato: "" },
        { nome: "João Pedro Weydt", contato: "" },
        { nome: "Rhyan Pinto", contato: "" },
        { nome: "Vinicius Saidy", contato: "" },
        { nome: "Lucas Teixeira", contato: "" },
        { nome: "Caio Santos", contato: "" },
        { nome: "Gabriel Costa", contato: "" },
        { nome: "Daniel Medeiros", contato: "" },
      ]
    },
    {
      name: "Software Odoyá",
      description: "Website do projeto Odoyá da Extensão ENACTUS.",
      team: "Web/App",
      status: "Finalizado",
      type: "Projeto",
      link: "https://github.com/WolfByte-CEFET-RJ/Software-Odoya/tree/master",
      about: "Apoiando a iniciativa de contrução de projetos com maior impacto sócio-ambiental, a aplicação tem como objetivo auxiliar os principais processos do projeto Odoyá-ENACTUS/RJ (@odoya.projeto). A proposta é produzir um sistema que controle o cadastro de pontos de coleta de esponja, depósitos, mutirões de limpeza e inscrições. ",
      membros: [
        { nome: "Gustavo Andrade", contato: "gustavoandrade0125@gmail.com" },
        { nome: "Sarah Campos", contato: "" },
        { nome: "Carlos Ichiro", contato: "" },
        { nome: "Luiz Antônio", contato: "" },
        { nome: "Luiz Felipe", contato: "" },
        { nome: "Erick Martins", contato: "" },
        { nome: "Cleyton Prado", contato: "" },
        { nome: "Rhyan Pinto", contato: "" },
        { nome: "Vinicius Saidy", contato: "" },
        { nome: "Lucas Teixeira", contato: "" },
        { nome: "Ennya Gomes", contato: "" },
        { nome: "Rafael Costa", contato: "" },
        { nome: "João Pedro Weydt", contato: "" },
        { nome: "Lucas Teixeira", contato: "" },
      ]
    },
    {
      name: "Ramo Store",
      description: "E-commerce de produtos do Ramo Estudatil IEEE - CEFET/RJ",
      team: "Web/App",
      status: "Finalizado",
      type: "Mini-projeto",
      link: "https://github.com/WolfByte-CEFET-RJ/Minicase-IEEEStore",
      about: "",
      membros: [
        { nome: "Guilherme Andrade", contato: "" },
        { nome: "Daniel Mota", contato: "" },
        { nome: "Lucas Montenegro", contato: "" },
        { nome: "Beatriz Cerutti", contato: "" },
        { nome: "Marcus Faben", contato: "" },
      ]
    },
    {
      name: "WiseFinance",
      description: "Website de carteira digital para controle de receitas e despesas.",
      team: "Web/App",
      status: "Finalizado",
      type: "Mini-projeto",
      link: "https://github.com/WolfByte-CEFET-RJ/Web-minicase_Wise_Finance",
      about: "",
      membros: [
        { nome: "Gustavo Andrade", contato: "gustavoandrade0125@gmail.com" },
        { nome: "Lara Ramos", contato: "" },
        { nome: "Lucas Montenegro", contato: "" },
        { nome: "Daniel Medeiros", contato: "" },
      ]
    },
    {
      name: "Site CS + CEFET/RJ",
      description: "Website de divulgação do Capítulo Computer Society no CEFET/RJ",
      team: "Web/App",
      status: "Finalizado",
      type: "Atividade",
      link: "https://www.cs-cefetrj.com.br/",
      about: "",
      membros: [
        { nome: "Gustavo Andrade", contato: "gustavoandrade0125@gmail.com" },
        { nome: "João Pedro Weydt", contato: "" },
        { nome: "Daniel Medeiros", contato: "" },
      ]
    },
    {
      name: "I<3E",
      description: "Jogo estilo Dating Sim com referências ao Student Branch",
      team: "Games",
      status: "Finalizado",
      type: "Projeto",
      link: "",
      about: "",
      membros: []
    },
    {
      name: "Bear Garden",
      description: "Jogo de minigames com narrativa interativa.",
      team: "Games",
      status: "Finalizado",
      type: "Projeto",
      link: "",
      about: "",
      membros: []
    },
    {
      name: "Sepex Survivor",
      description: "Jogo mobile estilo Bullet Hell com times do Ramo.",
      team: "Games",
      status: "Finalizado",
      type: "Projeto",
      link: "",
      about: "",
      membros: []
    },
    {
      name: "AVIR",
      description: "IA e BOT para sistemas de interface inteligentes.",
      team: "IA/BOT",
      status: "Finalizado",
      type: "Projeto",
      link: "",
      about: "",
      membros: []
    },
    {
      name: "V3S",
      description: "Robôs IEEE-VSSS com IA e IoT. Parceria com capítulo RAS/CEFET-RJ",
      team: "IA/BOT",
      status: "Finalizado",
      type: "Projeto",
      link: "",
      about: "",
      membros: []
    },
    {
      name: "SIR",
      description: "Automação inteligente de processos do Ramo.",
      team: "IA/BOT",
      status: "Ativo",
      type: "Projeto",
      link: "",
      about: "",
      membros: []
    },
    {
      name: "Fliperama",
      description: "Estrutura de fliperama para jogos do Ramo.",
      team: "Hardware",
      status: "Ativo",
      type: "Projeto",
      link: "",
      about: "",
      membros: []
    },
    {
      name: "Console Portátil",
      description: "Portabilidade para jogos eletrônicos.",
      team: "Hardware",
      status: "Finalizado",
      type: "Projeto",
      link: "",
      about: "",
      membros: []
    },
    {
      name: "Torre de Carregador",
      description: "Estrutura com várias tomadas de fácil acesso.",
      team: "Hardware",
      status: "Finalizado",
      type: "Projeto",
      link: "",
      about: "",
      membros: []
    }
  ]);
  

  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(projetos);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = () => setSelectedProject(null);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const searchProjects = useCallback(() => {
    const results = projetos.filter((projeto) =>
      projeto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.membros.some((membro) =>
        membro.nome.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setSearchResults(results);
  }, [projetos, searchTerm]);

  const handleClearSearch = () => {
    setSearchTerm("");
    searchProjects();
    navigate('/projetos/filtro'); 
    navigate(0);

  };  

  useEffect(() => {
    const equipeQuery = new URLSearchParams(location.search).get('equipe');
    if (equipeQuery) {
      setSearchTerm(equipeQuery);
    }
    searchProjects();
  }, [location.search, searchProjects]);

  function copyEmail(membro) {

    if(!membro.contato){
      toast.error("O membro não possui informações de contato cadastradas")
      return
    }
    
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = membro.contato;
    
    tempInput.select();
    document.execCommand("copy");
    
    document.body.removeChild(tempInput);
    
    toast.success(`Email de ${membro.nome} copiado para a área de transferência!`);
  }
    
  

  return (
    <div className="main">
      <div className="searchBar">
        <MagnifyingGlass size={28} className="searchIcon" />
        
        <input
          id="search-bar"
          type="text"
          placeholder="Pesquise por projeto, membro ou equipe"
          value={searchTerm}
          onChange={handleSearchInputChange}
          disabled={!!query.get('equipe')}
          style={!!query.get('equipe') ? {cursor: "not-allowed"} : {}}
        />

        <button title="LIMPAR BUSCA" className="clean-search" onClick={handleClearSearch} style={{ padding: 4 }}>
          <Eraser size={24} weight="bold" style={{ color: 'white' }}/>
        </button>
      </div>
  
      <div className="align-pro">
        <div className="Projects">
          {searchResults.map((infos) => (
            <div key={infos.name} onClick={() => setSelectedProject(infos)}>
              <ProjectCard infos={infos} showTeam={!query.get('equipe')} />
            </div>

          ))}
          {searchResults.length === 0 && searchTerm !== '' && (
            <p>Nenhum projeto encontrado para "{searchTerm}"</p>
          )}
        </div>
      </div>
  
      <div className="exib">
          <h3>Mostrando <span className="destaque">{searchResults.length || projetos.length}</span> de <span className="destaque">{projetos.length}</span> projetos</h3>
      </div>

      

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="close-icon" onClick={handleCloseModal}>
              <X size={24} weight="bold" />
            </div>

            <h1 className="modal-title">{selectedProject.name}</h1>

            <p>
              <strong>Status:</strong>{" "}
              <span className={`project-status project-status--${selectedProject.status.toLowerCase().replace(/\s+/g, "-")}`}>
                {selectedProject.status}
              </span>
            </p>
            <p><strong>Equipe:</strong> {selectedProject.team}</p>
            <p><strong>Tipo:</strong> {selectedProject.type}</p>
            
            <p>
              <strong>Link associado:</strong>{" "}
              {selectedProject.link ? 
              (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  {selectedProject.link}
                </a>) 
              : <span style={{ color: "gray", fontSize: 12 }}>Nenhum link informado.</span>
              }

            </p>
            
            <p><strong>Resumo:</strong> {selectedProject.description}</p>
            
            <p>
              <strong>Sobre:</strong>{" "}
              {selectedProject.about ? (
                <>{selectedProject.about}</>
              ) : (
                <span style={{ color: "gray", fontSize: 12 }}>Sem mais informações sobre o projeto.</span>
              )}
            </p>



            <div className="membros-container">
              <strong>Membros:</strong>
              {selectedProject.membros.length > 0 ? (
                <>
                  <span style={{ color: "gray", fontSize: 12 }}>
                    {" "}Clique para entrar em contato
                  </span>
                  <div className="membros-pills">
                    {selectedProject.membros.map((membro, index) => (
                      <span
                        key={index}
                        className="membro-pill"
                        onClick={() => copyEmail(membro)}
                      >
                        {membro.nome}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <p style={{ color: "gray", fontSize: 12 }}>Nenhum membro listado.</p>
              )}
            </div>
          </div>
        </div>
      )}




      <Footer />
    </div>
  );  
}

export default Projetos;