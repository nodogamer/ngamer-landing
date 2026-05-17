import Link from 'next/link'

interface Props {
  searchParams: Promise<{ payment_id?: string; order_id?: string; status?: string }>
}

export default async function Gracias({ searchParams }: Props) {
  const params = await searchParams
  const { payment_id, order_id, status } = params

  if (payment_id && order_id) {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payments/confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payment_id, order_id }),
      })
    } catch {
      // El webhook lo va a resolver si falla
    }
  }

  const isPending = status === 'pending'

  return (
    <div className="gracias-page">
      <div className="gracias-box">
        <div className="gracias-icon">✓</div>
        <h1 className="gracias-title">
          {isPending ? '¡Pago en proceso!' : '¡Pago recibido!'}
        </h1>
        <p className="gracias-text">
          {isPending
            ? 'Tu pago está siendo procesado. Cuando se confirme te contactamos por WhatsApp con los datos de acceso.'
            : 'Tu pago fue procesado correctamente. En las próximas horas te contactamos por WhatsApp con los datos de acceso a tu servidor.'}
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
