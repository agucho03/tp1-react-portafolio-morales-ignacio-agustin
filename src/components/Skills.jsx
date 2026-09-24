// recibe las habilidades por props y las recorro con el map
function Skills({ habilidades }) {
  return (
    <section className="skills" id="skills">
      <h2>Habilidades</h2>
      <ul className="skills__lista">
        {habilidades.map((habilidad) => (
          <li key={habilidad.nombre} className="skills__item">
            <span className="skills__nombre">{habilidad.nombre}</span>
            <span className="skills__nivel">{habilidad.nivel}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
