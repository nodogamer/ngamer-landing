import Link from 'next/link'

type Variant = 'success' | 'pending' | 'cancelled'

const VARIANTS: Record<Variant, {
  icon: string
  iconClass: string
  title: string
  message: string
  contact: { prefix: string; href: string; label: string; external?: boolean }
  action: { href: string; label: string; btnClass: string }
}> = {
  success: {
    icon: '✓',
    iconClass: 'gracias-icon',
    title: '¡Pago recibido!',
    message: 'Tu pago fue procesado correctamente. En las próximas horas te contactamos por WhatsApp con los datos de acceso a tu servidor.',
    contact: { prefix: 'Cualquier consulta escribinos a ', href: 'mailto:hola@ngamer.ar', label: 'hola@ngamer.ar' },
    action: { href: '/', label: 'Volver al inicio', btnClass: 'btn btn-outline' },
  },
  pending: {
    icon: '✓',
    iconClass: 'gracias-icon',
    title: '¡Pago en proceso!',
    message: 'Tu pago está siendo procesado. Cuando se confirme te contactamos por WhatsApp con los datos de acceso.',
    contact: { prefix: 'Cualquier consulta escribinos a ', href: 'mailto:hola@ngamer.ar', label: 'hola@ngamer.ar' },
    action: { href: '/', label: 'Volver al inicio', btnClass: 'btn btn-outline' },
  },
  cancelled: {
    icon: '✕',
    iconClass: 'gracias-icon gracias-icon--error',
    title: 'Pago cancelado',
    message: 'No se realizó ningún cobro. Podés volver a elegir un plan cuando quieras.',
    contact: { prefix: '¿Tenés dudas? Escribinos a ', href: 'https://wa.me/5491111111111', label: 'WhatsApp', external: true },
    action: { href: '/#planes', label: 'Ver planes', btnClass: 'btn btn-primary' },
  },
}

export default function PaymentResult({ variant }: { variant: Variant }) {
  const { icon, iconClass, title, message, contact, action } = VARIANTS[variant]

  return (
    <div className="gracias-page">
      <div className="gracias-box">
        <div className={iconClass}>{icon}</div>
        <h1 className="gracias-title">{title}</h1>
        <p className="gracias-text">{message}</p>
        <p className="gracias-contact">
          {contact.prefix}
          <a
            href={contact.href}
            className="gracias-link"
            {...(contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {contact.label}
          </a>
        </p>
        <Link href={action.href} className={action.btnClass} style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
          {action.label}
        </Link>
      </div>
    </div>
  )
}
