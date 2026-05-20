'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

interface Order {
  id: string
  amount_ars: number
  status: string
  created_at: string | null
  plans: { label: string } | null
}

const STATUS_LABEL: Record<string, string> = {
  pending: 'Pendiente',
  approved: 'Pagado',
  in_process: 'En proceso',
  in_mediation: 'En mediación',
  rejected: 'Rechazado',
  cancelled: 'Cancelado',
}

const STATUS_CLASS: Record<string, string> = {
  pending: 'status-pending',
  approved: 'status-approved',
  in_process: 'status-process',
  in_mediation: 'status-mediation',
  rejected: 'status-rejected',
  cancelled: 'status-cancelled',
}

function formatDate(iso: string | null) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('es-AR', { day: '2-digit', month: 'short', year: 'numeric' })
}

function formatARS(amount: number) {
  return `$${amount.toLocaleString('es-AR')}`
}

export default function MisPedidosPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    async function fetchOrders() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login?next=/mis-pedidos')
        return
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
        headers: { 'Authorization': `Bearer ${session.access_token}` },
      })

      if (res.ok) {
        const data = await res.json()
        setOrders(data.orders ?? [])
      }
      setLoading(false)
    }

    fetchOrders()
  }, [])

  return (
    <main className="orders-page">
      <div className="orders-container">
        <div className="orders-header">
          <Link href="/" className="orders-back">← Volver</Link>
          <h1 className="orders-title">Mis pedidos</h1>
          <p className="orders-subtitle">Historial de servidores contratados</p>
        </div>

        {loading ? (
          <div className="orders-empty">Cargando...</div>
        ) : orders.length === 0 ? (
          <div className="orders-empty">
            <p>Todavía no tenés pedidos.</p>
            <Link href="/#planes" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Ver planes
            </Link>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-main">
                  <div className="order-plan">{order.plans?.label ?? 'Plan'}</div>
                  <div className="order-amount">{formatARS(order.amount_ars)}</div>
                </div>
                <div className="order-meta">
                  <span className="order-date">{formatDate(order.created_at)}</span>
                  <span className={`order-status ${STATUS_CLASS[order.status] ?? 'status-pending'}`}>
                    {STATUS_LABEL[order.status] ?? order.status}
                  </span>
                </div>
                <div className="order-id">#{order.id.slice(0, 8).toUpperCase()}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
