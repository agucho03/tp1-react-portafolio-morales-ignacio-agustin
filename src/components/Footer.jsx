function Footer({ nombre }) {
  const anioActual = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer__nombre">{nombre}</p>
      <div className="footer__contacto">
        <a href="mailto:agustinmorales1504@gmail.com">Email</a>
        <a href="https://github.com/agucho03" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="tel:+543812220501">381 222-0501</a>
      </div>
    </footer>
  )
}

export default Footer
