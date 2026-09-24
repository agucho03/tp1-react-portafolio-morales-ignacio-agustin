import { useState } from 'react'

// Componente reutilizable: recibe un único proyecto por props
function ProjectCard({ proyecto }) {
  const { titulo, descripcion, tecnologias, link, imagenes } = proyecto

  // useState controla si el modal con el detalle del proyecto está abierto
  const [mostrarModal, setMostrarModal] = useState(false)

  return (
    <>
      <article className="project-card">
        {imagenes && imagenes.length > 0 && (
          <div className="project-card__galeria">
            {imagenes.map((imagen) => (
              <img key={imagen} src={imagen} alt={`Captura de ${titulo}`} />
            ))}
          </div>
        )}
        <div className="project-card__body">
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
          <ul className="project-card__tech">
            {tecnologias.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {/* Evento onClick: en vez de navegar, abre el modal con el detalle */}
          <button className="project-card__link" onClick={() => setMostrarModal(true)}>
            Ver más →
          </button>
        </div>
      </article>

      {/* Renderizado condicional: el modal solo existe en el DOM si mostrarModal es true */}
      {mostrarModal && (
        <div className="project-modal__overlay" onClick={() => setMostrarModal(false)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="project-modal__cerrar"
              onClick={() => setMostrarModal(false)}
              aria-label="Cerrar"
            >
              ×
            </button>

            {imagenes && imagenes.length > 0 && (
              <div className="project-modal__galeria">
                {imagenes.map((imagen) => (
                  <img key={imagen} src={imagen} alt={`Captura de ${titulo}`} />
                ))}
              </div>
            )}

            <div className="project-modal__body">
              <h3>{titulo}</h3>
              <p>{descripcion}</p>
              <ul className="project-card__tech">
                {tecnologias.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {link && link !== '#' && (
                <a
                  className="btn btn--secundario"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar proyecto
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
