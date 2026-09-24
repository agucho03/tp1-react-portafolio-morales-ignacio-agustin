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
  return (
    <>
      <Header
        nombre="Ignacio Agustin Morales"
        profesion="Estudiante de Programación (UTN)"
      />
      <main>
        <Hero />
        <About />
        <Skills habilidades={habilidades} />
        <Projects proyectos={proyectos} />
      </main>
      <Footer nombre="Ignacio Agustin Morales" />
    </>
  )
}

export default App
