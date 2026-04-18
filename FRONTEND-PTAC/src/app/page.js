import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Sistema de Reservas</h1>
      <nav>
        <Link href="/login" style={{ marginRight: '10px', color: 'blue' }}>Login</Link>
        <Link href="/cadastro" style={{ color: 'blue' }}>Cadastro</Link>
      </nav>
    </div>
  );
}