import Image from 'next/image'
import Navbar from '@/components/Navbar'
import BillingToggle from '@/components/BillingToggle'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* HERO */}
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

      {/* SERVICIOS */}
      <section className="section" id="servicios">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Por qué elegirnos</h2>
            <p className="section-subtitle">Infraestructura propia, soporte real, sin intermediarios</p>
          </div>
          <div className="features-grid">
            {[
              { icon: '⚡', title: 'Latencia ultra baja', desc: 'Servidores físicos en CABA. Menos de 20ms para jugadores en Buenos Aires y Gran Buenos Aires.' },
              { icon: '🔗', title: '1 Gbps simétrico', desc: 'Enlace dedicado de 1 Gbps con failover automático. Sin throttling, sin límites artificiales.' },
              { icon: '🎮', title: 'Panel de control AMP', desc: 'Gestioná tu servidor desde el navegador. Instalá mods, reiniciá, configurá — sin tocar una terminal.' },
              { icon: '💬', title: 'Soporte humano', desc: 'Sin tickets, sin bots. Hablás directo con quien opera los servidores, por WhatsApp, en español.' },
              { icon: '🛡️', title: 'Protección DDoS', desc: 'Filtrado de tráfico malicioso activo. Tus jugadores conectados aunque te ataquen.' },
              { icon: '💾', title: 'Backups automáticos', desc: 'Tu mundo respaldado automáticamente. Recuperá cualquier punto anterior con un clic.' },
            ].map((f) => (
              <div key={f.title} className="feature-card reveal">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="games-section reveal">
            <p className="games-label">Juegos disponibles</p>
            <div className="games-chips">
              <span className="chip chip-active">▪ Minecraft</span>
              <span className="chip">Valheim</span>
              <span className="chip">CS2</span>
              <span className="chip">ARK</span>
              <span className="chip">Terraria</span>
              <span className="chip">Rust</span>
              <span className="chip">Factorio</span>
              <span className="chip">Lineage 2 <span className="soon-badge">Pronto</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="section section-dark" id="planes">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Nuestros Planes</h2>
            <p className="section-subtitle">Elegí el que se ajusta a tu comunidad</p>
          </div>
          <BillingToggle />
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="section" id="quienes-somos">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Quiénes Somos</h2>
            <p className="section-subtitle">Hosting hecho por gamers, para gamers</p>
          </div>
          <div className="about-grid">
            <div className="about-text reveal">
              <p>NodoGamer nació de la frustración de querer jugar con amigos y encontrarse con servidores lentos, soporte automatizado y hosting en el exterior con latencia inaceptable para Argentina.</p>
              <p>Somos un equipo técnico con infraestructura física propia en CABA, con experiencia real en redes, servidores y virtualización. No revendemos capacidad de terceros — los servidores corren en hardware nuestro, con conectividad nuestra.</p>
              <p>Cuando necesitás ayuda, hablás con alguien que realmente entiende lo que está pasando.</p>
            </div>
            <div className="about-highlights reveal">
              {[
                { icon: '📍', title: 'Infraestructura en CABA', desc: 'Hardware propio, no revendemos servidores externos' },
                { icon: '⚡', title: 'Conexión de 1 Gbps real', desc: 'Enlace dedicado con failover automático' },
                { icon: '🎧', title: 'Soporte sin bots', desc: 'Hablás directo con quien opera los servidores' },
                { icon: '⚙️', title: 'Administrado por técnicos', desc: 'Redes, virtualización y sistemas como hobby y profesión' },
              ].map((h) => (
                <div key={h.title} className="highlight">
                  <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '0.1rem' }}>{h.icon}</span>
                  <div>
                    <strong>{h.title}</strong>
                    <span>{h.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
    </>
  )
}
