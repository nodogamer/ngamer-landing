export default function Loading() {
  return (
    <main className="auth-page">
      <div className="auth-box" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="skeleton" style={{ width: '140px', height: '32px', marginBottom: '1rem' }} />
        <div className="skeleton" style={{ height: '44px' }} />
        <div className="skeleton" style={{ height: '44px' }} />
        <div className="skeleton" style={{ height: '44px' }} />
        <div className="skeleton" style={{ height: '44px' }} />
      </div>
    </main>
  )
}
