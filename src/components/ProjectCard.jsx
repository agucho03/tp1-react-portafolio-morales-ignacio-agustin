// Componente reutilizable: recibe un único proyecto por props
function ProjectCard({ proyecto }) {
  const { titulo, descripcion, tecnologias, link } = proyecto

  return (
    <article className="project-card">
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
    </article>
  )
}

export default ProjectCard
