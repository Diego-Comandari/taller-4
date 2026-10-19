import { Container } from 'reactstrap'
import HealthSection from './components/HealthSection'
import InfoIntegrantes from './components/InfoIntegrantes'

function App() {
  return (
    <Container className="pb-5">
      <header className="text-center">
        <h1 className="titulo-principal">Taller IV</h1>
        <p className="text-muted">Programación Web · Vite + React + Reactstrap + Express</p>
      </header>

      <HealthSection />
      <InfoIntegrantes />
    </Container>
  )
}

export default App
