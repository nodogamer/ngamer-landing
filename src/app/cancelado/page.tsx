import Link from 'next/link'

export default function Cancelado() {
  return (
    <div className="gracias-page">
      <div className="gracias-box">
        <div className="gracias-icon" style={{ borderColor: 'var(--color-muted)', color: 'var(--color-muted)' }}>✕</div>
        <h1 className="gracias-title">Pago cancelado</h1>
        <p className="gracias-text">
          No se realizó ningún cobro. Podés volver a elegir un plan cuando quieras.
        </p>
        <p className="gracias-contact">
          ¿Tenés dudas? Escribinos a{' '}
          <a href="https://wa.me/5491111111111" target="_blank" rel="noopener noreferrer" className="gracias-link">
            WhatsApp
          </a>
        </p>
        <Link href="/#planes" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
          Ver planes
        </Link>
      </div>
    </div>
  )
}
