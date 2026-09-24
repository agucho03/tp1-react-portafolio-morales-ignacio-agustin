import { useState } from 'react'

function About() {
  // useState maneja si se muestra o no el texto extendido
  const [mostrarMas, setMostrarMas] = useState(false)

  return (
    <section className="about" id="about">
      <h2>Sobre mí</h2>
      <p>
        Soy estudiante de la Tecnicatura Universitaria en Programación en la
        UTN. Me interesa el desarrollo web y estoy dando mis primeros pasos
        con React, aplicando en este portfolio los conceptos vistos durante
        la cursada.
      </p>

      {/* Renderizado condicional: este párrafo solo aparece si mostrarMas es true */}
      {mostrarMas && (
        <p className="about__extra">
          Mi objetivo es seguir formándome como desarrollador frontend,
          sumando de a poco herramientas del ecosistema de React y buenas
          prácticas de organización de código en proyectos reales.
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
