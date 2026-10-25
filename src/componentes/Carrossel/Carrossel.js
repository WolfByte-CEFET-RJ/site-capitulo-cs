import React, { useState, useEffect, useCallback } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import "./Carrossel.css";

function Carrossel({ fotos, intervalo = 5000 }) {
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const total = fotos.length;

  const ir = useCallback((n) => setAtual((n + total) % total), [total]);

  useEffect(() => {
    const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (pausado || reduzMovimento || total < 2) return;
    const t = setInterval(() => setAtual((x) => (x + 1) % total), intervalo);
    return () => clearInterval(t);
  }, [pausado, total, intervalo]);

  if (!total) return null;

  return (
    <div
      className="carrossel"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Fotos dos eventos"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
    >
      <div className="car-trilho" style={{ transform: `translateX(-${atual * 100}%)` }}>
        {fotos.map((f, n) => (
          <figure className="car-slide" key={f.src + n} aria-hidden={n !== atual}>
            <img src={f.src} alt={f.legenda} loading={n === 0 ? "eager" : "lazy"} />
            <figcaption>
              <strong>{f.legenda}</strong>
              {f.evento && <span>{f.evento}</span>}
              {f.data && <span>{f.data}</span>}
            </figcaption>
          </figure>
        ))}
      </div>

      {total > 1 && (
        <>
          <button className="car-seta esq" onClick={() => ir(atual - 1)} aria-label="Foto anterior">
            <CaretLeft size={22} weight="bold" />
          </button>
          <button className="car-seta dir" onClick={() => ir(atual + 1)} aria-label="Próxima foto">
            <CaretRight size={22} weight="bold" />
          </button>
          <div className="car-pontos">
            {fotos.map((f, n) => (
              <button
                key={f.src + n}
                className={n === atual ? "on" : ""}
                onClick={() => ir(n)}
                aria-label={`Ir para a foto ${n + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Carrossel;
