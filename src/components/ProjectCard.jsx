import { useState } from 'react'
function ProjectCard({ proyecto }) {
  const { titulo, descripcion, tecnologias, link, imagenes } = proyecto
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
          <button className="project-card__link" onClick={() => setMostrarModal(true)}>
            Ver más →
          </button>
        </div>
      </article>
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
                  Mirar proyecto
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
