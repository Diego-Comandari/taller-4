import { Container } from 'reactstrap'
import HealthSection from './components/HealthSection'
import InfoIntegrantes from './components/InfoIntegrantes'

function App() {
  return (
    <Container className="pb-5" style={{ maxWidth: 960 }}>
      <header className="hero">
        <span className="hero-tag">// Programación Web · Ciclo 02-2026</span>
        <h1 className="titulo-principal">Taller IV</h1>
        <p className="hero-sub">Frontend en React conectado a una API REST hecha con Express</p>
        <div className="stack">
          <span>Vite</span>
          <span>React</span>
          <span>Reactstrap</span>
          <span>Express</span>
        </div>
      </header>

      <HealthSection />
      <InfoIntegrantes />

      <footer className="footer mono">Taller de ejercicios IV · Sección 01</footer>
    </Container>
  )
}

export default App
