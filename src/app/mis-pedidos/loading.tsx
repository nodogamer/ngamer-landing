export default function Loading() {
  return (
    <main className="orders-page">
      <div className="orders-container">
        <div className="orders-header">
          <div className="skeleton" style={{ width: '80px', height: '16px', marginBottom: '1rem' }} />
          <div className="skeleton" style={{ width: '200px', height: '32px', marginBottom: '0.4rem' }} />
          <div className="skeleton" style={{ width: '260px', height: '16px' }} />
        </div>
        <div className="orders-list">
          {[1, 2, 3].map((i) => (
            <div key={i} className="order-card">
              <div className="order-main">
                <div className="skeleton" style={{ width: '120px', height: '20px' }} />
                <div className="skeleton" style={{ width: '80px', height: '20px' }} />
              </div>
              <div className="order-meta">
                <div className="skeleton" style={{ width: '100px', height: '14px' }} />
                <div className="skeleton" style={{ width: '70px', height: '22px', borderRadius: '999px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
