import { useEffect, useState } from 'react'
import {
  Alert,
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
  Spinner,
} from 'reactstrap'
import { getInfo } from '../services/api'

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
      <div className="text-center my-4">
        <Spinner color="primary" /> <span className="ms-2">Cargando información...</span>
      </div>
    )
  }

  return (
    <section>
      <Alert color="success">
        <strong>api/info:</strong> {info.mensaje}
      </Alert>

      <h4 className="mb-3">
        Integrantes <Badge color="primary" pill>{info.integrantes.length}</Badge>
      </h4>

      <Row>
        {info.integrantes.map((integrante) => (
          <Col md="6" className="mb-4" key={integrante.id}>
            <Card className="h-100 shadow-sm">
              <CardHeader className="bg-primary text-white">
                Integrante {integrante.id}
              </CardHeader>
              <CardBody>
                <CardTitle tag="h5">{integrante.nombre}</CardTitle>
                <CardSubtitle className="mb-3 text-muted" tag="h6">
                  {integrante.carrera}
                </CardSubtitle>
                <CardText>
                  <strong>Edad:</strong> {integrante.edad} años
                </CardText>
                <CardText>
                  <strong>Materias aprobadas:</strong>{' '}
                  <Badge color="success" pill>{integrante.materiasAprobadas}</Badge>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default InfoIntegrantes
