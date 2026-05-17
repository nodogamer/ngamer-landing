const FEATURES = [
  { icon: '⚡', title: 'Latencia ultra baja', desc: 'Servidores físicos en CABA. Menos de 20ms para jugadores en Buenos Aires y Gran Buenos Aires.' },
  { icon: '🔗', title: '1 Gbps simétrico', desc: 'Enlace dedicado de 1 Gbps con failover automático. Sin throttling, sin límites artificiales.' },
  { icon: '🎮', title: 'Panel de control AMP', desc: 'Gestioná tu servidor desde el navegador. Instalá mods, reiniciá, configurá — sin tocar una terminal.' },
  { icon: '💬', title: 'Soporte humano', desc: 'Sin tickets, sin bots. Hablás directo con quien opera los servidores, por WhatsApp, en español.' },
  { icon: '🛡️', title: 'Protección DDoS', desc: 'Filtrado de tráfico malicioso activo. Tus jugadores conectados aunque te ataquen.' },
  { icon: '💾', title: 'Backups automáticos', desc: 'Tu mundo respaldado automáticamente. Recuperá cualquier punto anterior con un clic.' },
]

const GAMES = [
  { label: '▪ Minecraft', active: true },
  { label: 'Valheim' },
  { label: 'CS2' },
  { label: 'ARK' },
  { label: 'Terraria' },
  { label: 'Rust' },
  { label: 'Factorio' },
  { label: 'Lineage 2', soon: true },
]

export default function ServicesSection() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Por qué elegirnos</h2>
          <p className="section-subtitle">Infraestructura propia, soporte real, sin intermediarios</p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
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
            {GAMES.map((g) => (
              <span key={g.label} className={`chip ${g.active ? 'chip-active' : ''}`}>
                {g.label}
                {g.soon && <span className="soon-badge">Pronto</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
