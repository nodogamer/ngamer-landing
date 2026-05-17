import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/logo.svg" alt="NodoGamer" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '28px' }} />
            <span className="footer-name">NodoGamer</span>
          </div>
          <div className="footer-contact">
            <a href="https://wa.me/5491111111111" target="_blank" rel="noopener noreferrer" className="footer-link">
              💬 WhatsApp
            </a>
            <a href="mailto:hola@ngamer.ar" className="footer-link">
              ✉️ hola@ngamer.ar
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 NodoGamer. Hosting para tus mundos de juego.</p>
          <p className="footer-disclaimer">No estamos afiliados con Mojang AB, Valve Corporation ni ninguna de las marcas de juegos mencionadas.</p>
        </div>
      </div>
    </footer>
  )
}
