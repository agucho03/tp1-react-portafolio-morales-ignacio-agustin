import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { habilidades } from './data/skills'
import { proyectos } from './data/projects'
import './App.css'

function App() {
  const [perfil, setPerfil] = useState({
    nombre: 'Ignacio Agustin Morales',
    carrera: 'Estudiante de Programación (UTN)',
  })

  return (
    <>
      <Header perfil={perfil} />
      <main>
        <Hero />
        <About />
        <Skills habilidades={habilidades} />
        <Projects proyectos={proyectos} />
      </main>
      <Footer nombre={perfil.nombre} />
    </>
  )
}

export default App
