import React from "react";
import "./componentesStyle.css";

function ProjectCard({ infos }) {
  const { name, description, team, type } = infos;

  return (
    <div className="projectCard" data-team={team}>
      <div className="pc-tags">
        <span className="tag team">{team}</span>
        <span className="tag">{type}</span>
      </div>
      <h1>{name}</h1>
      <p className="Descript">{description}</p>
      <span className="pc-more">Ver detalhes</span>
    </div>
  );
}

export default ProjectCard;
