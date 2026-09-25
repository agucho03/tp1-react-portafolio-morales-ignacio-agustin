function Hero() {
  const irAProyectos = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <h1>Hola soy Agustin Morales </h1>
      <p className="hero__texto">
        Estudiante de Tecnicatura Universitaria en Programación (UTN) , aplicando mis conocimientos en cada proyecto.
      </p>
      <button className="btn btn--primario" onClick={irAProyectos}>
        Ver mis proyectos
      </button>
    </section>
  )
}

export default Hero
