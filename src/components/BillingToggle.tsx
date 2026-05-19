'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CheckoutModal from './CheckoutModal'
import { createClient } from '@/lib/supabase/client'

interface Plan {
  id: number
  label: string
  amount: number
  amount_annual: number | null
  tagline: string
  features: string[]
  popular: boolean
}

function formatARS(amount: number) {
  return `$${amount.toLocaleString('es-AR')}`
}

export default function BillingToggle({ plans }: { plans: Plan[] }) {
  const [annual, setAnnual] = useState(false)
  const [selected, setSelected] = useState<{ id: number; name: string; annual: boolean } | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleSelectPlan = async (id: number, name: string, isAnnual: boolean) => {
    const { data } = await supabase.auth.getUser()
    if (!data.user) {
      router.push(`/login?next=${encodeURIComponent('/#planes')}`)
      return
    }
    setSelected({ id, name, annual: isAnnual })
  }

  return (
    <>
      {selected && (
        <CheckoutModal
          plan={selected.id}
          label={selected.name}
          annual={selected.annual}
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
          <div key={plan.id} className={`plan-card reveal ${plan.popular ? 'plan-popular' : ''}`}>
            {plan.popular && <div className="plan-badge">Más popular</div>}
            <div className="plan-name">{plan.label}</div>
            <div className="plan-price">
              <span className="price-amount">
                {annual && plan.amount_annual
                  ? formatARS(plan.amount_annual)
                  : formatARS(plan.amount)}
              </span>
              <span className="price-period">/{annual ? 'año' : 'mes'}</span>
            </div>
            <div className="plan-tagline">{plan.tagline}</div>
            <ul className="plan-features">
              {plan.features.map((f, i) => (
                <li key={i}>
                  <span className="check-icon">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: f.replace(/(\d+\+?(?:\s\w+)?)/g, '<strong>$1</strong>') }} />
                </li>
              ))}
            </ul>
            <button
              className={`btn btn-full ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => handleSelectPlan(plan.id, plan.label, annual)}
            >
              Elegir plan
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
