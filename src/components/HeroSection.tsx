export default function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" />
      <div className="container hero-content">
        <div className="hero-badge fade-up">
          <span className="badge-dot" />
          Servidores en Argentina 🇦🇷
        </div>
        <h1 className="hero-title fade-up">
          Tu servidor de juegos,<br />
          <span className="text-accent">sin lag, sin vueltas</span>
        </h1>
        <p className="hero-subtitle fade-up">
          Hosting con infraestructura física propia en CABA. Soporte humano por WhatsApp, panel de control incluido y conexión de 1 Gbps.
        </p>
        <div className="hero-cta fade-up">
          <a href="#planes" className="btn btn-primary btn-lg">Ver nuestros planes</a>
          <a href="#servicios" className="btn btn-ghost btn-lg">Cómo funciona</a>
        </div>
        <div className="hero-stats fade-up">
          <div className="stat">
            <span className="stat-value">1 Gbps</span>
            <span className="stat-label">Conexión simétrica</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">&lt;20ms</span>
            <span className="stat-label">Latencia CABA/GBA</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Soporte por WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  )
}
