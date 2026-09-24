function Footer({ nombre }) {
  const anioActual = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer__nombre">{nombre}</p>
      <div className="footer__contacto">
        {/* TODO: reemplazá estos enlaces por tus datos reales */}
        <a href="mailto:tu-email@ejemplo.com">Email</a>
        <a href="https://github.com/agucho03" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <p className="footer__copy">© {anioActual} — Hecho con React + Vite</p>
    </footer>
  )
}

export default Footer
