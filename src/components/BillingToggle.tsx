'use client'

import { useState } from 'react'
import CheckoutModal from './CheckoutModal'

const plans = [
  {
    id: 'bloque-de-tierra',
    name: 'Bloque de Tierra',
    tagline: 'Ideal para empezar con amigos',
    monthly: '$5.000',
    annual: '$50.000',
    features: ['Hasta 10 jugadores', '2 GB de RAM', 'Panel de control AMP', 'Protección DDoS básica', 'Soporte por WhatsApp', 'Backups automáticos'],
    boldIndex: [0, 1],
    popular: false,
  },
  {
    id: 'diamante',
    name: 'Diamante',
    tagline: 'Para comunidades en crecimiento',
    monthly: '$10.000',
    annual: '$100.000',
    features: ['Hasta 25 jugadores', '4 GB de RAM', 'Panel de control AMP', 'Soporte para mods y plugins', 'Protección DDoS avanzada', 'Soporte por WhatsApp', 'Backups automáticos'],
    boldIndex: [0, 1],
    popular: true,
  },
  {
    id: 'netherita',
    name: 'Netherita',
    tagline: 'Máximo poder para tu network',
    monthly: '$20.000',
    annual: '$200.000',
    features: ['50+ jugadores', '8 GB de RAM', 'Panel de control AMP', 'Soporte para mods y plugins', 'Protección DDoS avanzada', 'Soporte prioritario 24/7', 'Backups automáticos', 'IP dedicada (opcional)'],
    boldIndex: [0, 1],
    popular: false,
  },
]

export default function BillingToggle() {
  const [annual, setAnnual] = useState(false)
  const [selected, setSelected] = useState<{ id: string; name: string } | null>(null)

  return (
    <>
      {selected && (
        <CheckoutModal
          plan={selected.id}
          label={selected.name}
          onClose={() => setSelected(null)}
        />
      )}

      <div className="billing-toggle reveal">
        <button className={`toggle-btn ${!annual ? 'active' : ''}`} onClick={() => setAnnual(false)}>
          Mensual
        </button>
        <button className={`toggle-btn ${annual ? 'active' : ''}`} onClick={() => setAnnual(true)}>
          Anual <span className="badge-saving">Ahorrás 2 meses</span>
        </button>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div key={plan.name} className={`plan-card reveal ${plan.popular ? 'plan-popular' : ''}`}>
            {plan.popular && <div className="plan-badge">Más popular</div>}
            <div className="plan-name">{plan.name}</div>
            <div className="plan-price">
              <span className="price-amount">{annual ? plan.annual : plan.monthly}</span>
              <span className="price-period">/{annual ? 'año' : 'mes'}</span>
            </div>
            <div className="plan-tagline">{plan.tagline}</div>
            <ul className="plan-features">
              {plan.features.map((f, i) => (
                <li key={i}>
                  <span className="check-icon">✓</span>
                  {plan.boldIndex.includes(i)
                    ? <span dangerouslySetInnerHTML={{ __html: f.replace(/(\d+\+?(?:\s\w+)?)/g, '<strong>$1</strong>') }} />
                    : f}
                </li>
              ))}
            </ul>
            <button
              className={`btn btn-full ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelected({ id: plan.id, name: plan.name })}
            >
              Elegir plan
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
