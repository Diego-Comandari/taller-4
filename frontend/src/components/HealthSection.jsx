import { useEffect, useState } from 'react'
import { getHealth } from '../services/api'
import './HealthSection.css'

function HealthSection() {
  const [estado, setEstado] = useState('cargando')
  const [datos, setDatos] = useState(null)

  useEffect(() => {
    getHealth()
      .then((data) => {
        setDatos(data)
        setEstado('ok')
      })
      .catch(() => setEstado('error'))
  }, [])

  return (
    <section className="health-section">
      <div className={`health-card ${estado}`}>
        <div className="health-indicator" />
        <div>
          <h4>Estado del API (api/health)</h4>
          {estado === 'cargando' && <p>Verificando conexión con el API...</p>}
          {estado === 'ok' && (
            <>
              <p>{datos.mensaje}</p>
              <p className="health-fecha">
                Estado: {datos.status} · {new Date(datos.timestamp).toLocaleString()}
              </p>
            </>
          )}
          {estado === 'error' && (
            <p>No se pudo conectar con el API. Verifique que el backend esté encendido.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default HealthSection
