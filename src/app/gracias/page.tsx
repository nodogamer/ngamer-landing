import Link from 'next/link'

export default function Gracias() {
  return (
    <div className="gracias-page">
      <div className="gracias-box">
        <div className="gracias-icon">✓</div>
        <h1 className="gracias-title">¡Pago recibido!</h1>
        <p className="gracias-text">
          Tu pago fue procesado correctamente. En las próximas horas te contactamos por WhatsApp con los datos de acceso a tu servidor.
        </p>
        <p className="gracias-contact">
          Cualquier consulta escribinos a{' '}
          <a href="mailto:hola@ngamer.ar" className="gracias-link">hola@ngamer.ar</a>
        </p>
        <Link href="/" className="btn btn-outline" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
