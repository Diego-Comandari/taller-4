import { useEffect, useState } from 'react'
import {
  Alert,
  Badge,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Spinner,
} from 'reactstrap'
import { getInfo } from '../services/api'
import './InfoIntegrantes.css'

// Primer nombre + primer apellido (ej. "Diego Gabriel Bonilla Comandari" -> "DB")
const iniciales = (nombre) => {
  const partes = nombre.split(' ')
  const apellido = partes.length >= 4 ? partes[2] : partes[partes.length - 1]
  return partes[0][0] + apellido[0]
}

function InfoIntegrantes() {
  const [info, setInfo] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getInfo()
      .then(setInfo)
      .catch((err) => setError(err.message))
  }, [])

  if (error) {
    return <Alert color="danger">No se pudo obtener la información del API: {error}</Alert>
  }

  if (!info) {
    return (
      <div className="text-center my-5">
        <Spinner color="info" /> <span className="ms-2">Cargando integrantes...</span>
      </div>
    )
  }

  const totalMaterias = info.integrantes.reduce((suma, i) => suma + i.materiasAprobadas, 0)

  return (
    <section>
      <h4 className="info-titulo">
        Integrantes
        <Badge color="info" pill className="mono">
          {info.integrantes.length}
        </Badge>
      </h4>

      <Alert className="info-alert">
        <code className="mono">GET /api/info</code> · {info.mensaje}
      </Alert>

      <Row>
        {info.integrantes.map((integrante) => (
          <Col md="6" className="mb-4" key={integrante.id}>
            <Card className="integrante-card h-100">
              <CardBody>
                <div className="integrante-top">
                  <div className={`avatar avatar-${integrante.id}`}>{iniciales(integrante.nombre)}</div>
                  <div>
                    <CardTitle tag="h5">{integrante.nombre}</CardTitle>
                    <CardSubtitle tag="small" className="text-info mono">
                      integrante_{String(integrante.id).padStart(2, '0')}
                    </CardSubtitle>
                  </div>
                </div>
                <ListGroup flush>
                  <ListGroupItem>
                    <span className="dato-label">Edad</span>
                    <span>{integrante.edad} años</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <span className="dato-label">Carrera</span>
                    <span>{integrante.carrera}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <span className="dato-label">Materias aprobadas</span>
                    <Badge color="success" pill className="mono">
                      {integrante.materiasAprobadas}
                    </Badge>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="resumen-card">
        <CardBody>
          <div className="resumen-valor mono">{totalMaterias}</div>
          <div className="dato-label">materias aprobadas entre los dos integrantes</div>
        </CardBody>
      </Card>
    </section>
  )
}

export default InfoIntegrantes
