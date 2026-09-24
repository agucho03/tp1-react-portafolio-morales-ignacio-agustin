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
  // guardo mis datos de perfil como un objeto en un estado
  const [perfil, setPerfil] = useState({
    nombre: 'Ignacio Agustin Morales',
    profesion: 'Estudiante de Programación (UTN)',
  })

  return (
    <>
      {/* le paso el objeto perfil entero por props, en vez de nombre y profesion sueltos */}
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
