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
      <p className="header__profesion">{perfil.carrera}</p>
    </header>
  )
}

export default Header
