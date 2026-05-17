import PaymentResult from '@/components/PaymentResult'

interface Props {
  searchParams: Promise<{ payment_id?: string; order_id?: string; status?: string }>
}

export default async function Gracias({ searchParams }: Props) {
  const { payment_id, order_id, status } = await searchParams

  if (payment_id && order_id) {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payments/confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payment_id, order_id }),
      })
    } catch {
      // El webhook lo resuelve si falla
    }
  }

  return <PaymentResult variant={status === 'pending' ? 'pending' : 'success'} />
}
