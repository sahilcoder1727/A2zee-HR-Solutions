import { Link } from 'react-router-dom'

export default function DivisionLanding() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      background: '#f5f5f5',
      color: '#111827'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>A2zee</h1>
      <p style={{ fontSize: '1.1rem', maxWidth: '640px', marginBottom: '1.5rem' }}>
        Welcome to our divisions landing page.
      </p>
      <Link
        to="/operations"
        style={{
          background: '#111827',
          color: '#fff',
          padding: '0.8rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600
        }}
      >
        Go to Home
      </Link>
    </div>
  )
}
