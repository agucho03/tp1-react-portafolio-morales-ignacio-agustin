function Hero() {
  // Evento onClick: hace scroll suave hasta la sección de proyectos
  const irAProyectos = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <h1>¡Hola! Soy Ignacio 👋</h1>
      <p className="hero__texto">
        Estudiante de la Tecnicatura Universitaria en Programación (UTN) dando
        mis primeros pasos en el desarrollo frontend con React.
      </p>
      <button className="btn btn--primario" onClick={irAProyectos}>
        Ver mis proyectos
      </button>
    </section>
  )
}

export default Hero
