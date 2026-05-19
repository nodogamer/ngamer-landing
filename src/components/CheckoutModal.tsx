'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

interface Props {
  plan: number
  label: string
  annual: boolean
  onClose: () => void
}

export default function CheckoutModal({ plan, label, annual, onClose }: Props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      setError('Tu sesión expiró. Volvé a iniciar sesión.')
      setLoading(false)
      return
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payments/create-preference`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ plan, annual }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error)

      window.location.href = data.init_point
    } catch {
      setError('Hubo un error al procesar. Intentá de nuevo.')
      setLoading(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="modal-title">Plan {label}</h2>
        <p className="modal-subtitle">Confirmá tu selección para ir al pago</p>
        <form onSubmit={handleSubmit} className="modal-form">
          {error && <p className="modal-error">{error}</p>}
          <button type="submit" disabled={loading} className="btn btn-primary btn-full">
            {loading ? 'Redirigiendo...' : 'Ir al pago'}
          </button>
        </form>
      </div>
    </div>
  )
}
