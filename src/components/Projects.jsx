import ProjectCard from './ProjectCard'

// Projects recibe el array "proyectos" por props y renderiza un ProjectCard por cada uno
function Projects({ proyectos }) {
  return (
    <section className="projects" id="projects">
      <h2>Proyectos</h2>
      <div className="projects__grid">
        {proyectos.map((proyecto) => (
          <ProjectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  )
}

export default Projects
