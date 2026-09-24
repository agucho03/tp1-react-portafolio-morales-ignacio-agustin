import ProjectCard from './ProjectCard'

// recibe los proyectos por props y por cada uno pinto un ProjectCard
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
