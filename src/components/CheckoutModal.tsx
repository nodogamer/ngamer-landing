'use client'

import { useState } from 'react'

interface Props {
  plan: number
  label: string
  annual: boolean
  onClose: () => void
}

export default function CheckoutModal({ plan, label, annual, onClose }: Props) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payments/create-preference`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, plan, annual }),
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
        <p className="modal-subtitle">Ingresá tu email para continuar al pago</p>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="email"
            required
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="modal-input"
          />
          {error && <p className="modal-error">{error}</p>}
          <button type="submit" disabled={loading} className="btn btn-primary btn-full">
            {loading ? 'Redirigiendo...' : 'Ir al pago'}
          </button>
        </form>
      </div>
    </div>
  )
}
