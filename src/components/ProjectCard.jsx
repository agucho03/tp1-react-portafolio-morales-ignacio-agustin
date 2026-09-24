// Componente reutilizable: recibe un único proyecto por props
function ProjectCard({ proyecto }) {
  const { titulo, descripcion, tecnologias, link, imagen } = proyecto

  return (
    <article className="project-card">
      {/* Renderizado condicional: la imagen solo se muestra si el proyecto la tiene */}
      {imagen && (
        <img className="project-card__imagen" src={imagen} alt={`Captura de ${titulo}`} />
      )}
      <div className="project-card__body">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <ul className="project-card__tech">
          {tecnologias.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <a
          className="project-card__link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Ver más →
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
