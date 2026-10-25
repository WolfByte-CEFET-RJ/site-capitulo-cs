import React, { useState, useEffect } from "react";
import { X } from "phosphor-react";
import Footer from "../../componentes/Footer/Footer.js";
import { fotos } from "../../data/galeria.js";
import "./Galeria.css";

function Legenda({ foto }) {
  return (
    <figcaption>
      <strong>{foto.legenda}</strong>
      {foto.evento && <span>{foto.evento}</span>}
      {foto.data && <span>{foto.data}</span>}
    </figcaption>
  );
}

function Galeria() {
  const [aberta, setAberta] = useState(null);

  useEffect(() => {
    const fechar = (e) => e.key === "Escape" && setAberta(null);
    window.addEventListener("keydown", fechar);
    return () => window.removeEventListener("keydown", fechar);
  }, []);

  return (
    <div className="galeria-page">
      <header className="galeria-topo">
        <h1>Galeria</h1>
        <p>Registros dos eventos, workshops e encontros do capítulo.</p>
      </header>

      <div className="galeria-grid">
        {fotos.length === 0 && <p>Ainda não há fotos por aqui.</p>}
        {fotos.map((f, n) => (
          <figure key={f.src + n} className="galeria-item">
            <button onClick={() => setAberta(f)} aria-label={`Ampliar foto: ${f.legenda}`}>
              <img src={f.src} alt={f.legenda} loading="lazy" />
            </button>
            <Legenda foto={f} />
          </figure>
        ))}
      </div>

      {aberta && (
        <div className="lightbox" onClick={() => setAberta(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={aberta.src} alt={aberta.legenda} />
            <Legenda foto={aberta} />
          </figure>
          <button className="lightbox-fechar" onClick={() => setAberta(null)} aria-label="Fechar">
            <X size={22} weight="bold" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Galeria;
