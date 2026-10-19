import { useEffect, useState } from 'react'
import { getHealth } from '../services/api'
import './HealthSection.css'

function HealthSection() {
  const [estado, setEstado] = useState('cargando')
  const [datos, setDatos] = useState(null)
  const [latencia, setLatencia] = useState(null)

  useEffect(() => {
    const inicio = performance.now()
    getHealth()
      .then((data) => {
        setLatencia(Math.round(performance.now() - inicio))
        setDatos(data)
        setEstado('ok')
      })
      .catch(() => setEstado('error'))
  }, [])

  return (
    <section className="health-section">
      <div className={`health-card ${estado}`}>
        <div className="health-indicator" />
        <div className="health-info">
          <h4>Estado del API</h4>
          {estado === 'cargando' && <p>Verificando conexión con el API...</p>}
          {estado === 'ok' && (
            <>
              <p className="health-mensaje">{datos.mensaje}</p>
              <p className="health-meta">
                GET /api/health · {datos.status} · {new Date(datos.timestamp).toLocaleTimeString()}
              </p>
            </>
          )}
          {estado === 'error' && (
            <>
              <p className="health-mensaje">No se pudo conectar con el API.</p>
              <p className="health-meta">Verifique que el backend esté encendido en el puerto 3000</p>
            </>
          )}
        </div>
        {estado === 'ok' && (
          <div className="health-latencia">
            <strong>{latencia} ms</strong>
            <span>respuesta</span>
          </div>
        )}
      </div>
    </section>
  )
}

export default HealthSection
