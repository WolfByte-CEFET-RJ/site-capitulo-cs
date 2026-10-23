
import React from "react";

import "./componentesStyle.css";

function ProjectCard({ infos, showTeam = true }) {
    const { name, description, team, status } = infos;
    
    return(
        <div className="projectCard">
            <div className="project-tags">
                <span className={`project-status project-status--${status.toLowerCase().replace(/\s+/g, "-")}`}>
                    {status}
                </span>
                {showTeam && <span className="project-team-tag">{team}</span>}
            </div>
            <h1>{name}</h1>
            <div className="Descript"><p>{description}</p></div>
        </div>
    )
}

export default ProjectCard;