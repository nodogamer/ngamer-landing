import BillingToggle from './BillingToggle'

interface Plan {
  id: number
  label: string
  amount: number
  amount_annual: number | null
  tagline: string
  features: string[]
  popular: boolean
}

async function getPlans(): Promise<Plan[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/plans`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export default async function PlansSection() {
  const plans = await getPlans()

  return (
    <section className="section section-dark" id="planes">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Nuestros Planes</h2>
          <p className="section-subtitle">Elegí el que se ajusta a tu comunidad</p>
        </div>
        <BillingToggle plans={plans} />
      </div>
    </section>
  )
}
