import { useState } from 'react'

function About() {
  const [mostrarMas, setMostrarMas] = useState(false)

  return (
    <section className="about" id="about">
      <h2>Sobre mí</h2>
      <p>
        Soy estudiante de la Tecnicatura Universitaria en Programación en la
        UTN. Interesado en el desarrollo web y estoy dando mis primeros pasos
        con React, aplicando los conceptos vistos durante lo cursado.
      </p>

      {mostrarMas && (
        <p className="about__extra">
          Mi objetivo es seguir formándome como programador,
          sumando de a poco herramientas profesionales y ademas poder practicar diariamente.
          Me considero un poco más especializado en C# que en
          JavaScript: es el lenguaje con el que más vengo trabajando en el proyecto
          final de la carrera.
        </p>
      )}

      <button
        className="btn btn--secundario"
        onClick={() => setMostrarMas(!mostrarMas)}
      >
        {mostrarMas ? 'Ver menos' : 'Ver más'}
      </button>
    </section>
  )
}

export default About
