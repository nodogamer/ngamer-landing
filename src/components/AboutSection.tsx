const HIGHLIGHTS = [
  { icon: '📍', title: 'Infraestructura en CABA', desc: 'Hardware propio, no revendemos servidores externos' },
  { icon: '⚡', title: 'Conexión de 1 Gbps real', desc: 'Enlace dedicado con failover automático' },
  { icon: '🎧', title: 'Soporte sin bots', desc: 'Hablás directo con quien opera los servidores' },
  { icon: '⚙️', title: 'Administrado por técnicos', desc: 'Redes, virtualización y sistemas como hobby y profesión' },
]

export default function AboutSection() {
  return (
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
            {HIGHLIGHTS.map((h) => (
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
  )
}
