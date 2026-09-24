// Header recibe "nombre" y "profesion" por props (ejemplo de la consigna)
function Header({ nombre, profesion }) {
  return (
    <header className="header">
      <div className="header__contenido">
        <span className="header__logo">👨‍💻 {nombre}</span>
        <nav className="header__nav">
          <a href="#about">Sobre mí</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Proyectos</a>
        </nav>
      </div>
      <p className="header__profesion">{profesion}</p>
    </header>
  )
}

export default Header
