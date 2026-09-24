// Header recibe el objeto perfil por props (nombre y profesion van adentro)
function Header({ perfil }) {
  return (
    <header className="header">
      <div className="header__contenido">
        <span className="header__logo">👨‍💻 {perfil.nombre}</span>
        <nav className="header__nav">
          <a href="#about">Sobre mí</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Proyectos</a>
        </nav>
      </div>
      <p className="header__profesion">{perfil.profesion}</p>
    </header>
  )
}

export default Header
