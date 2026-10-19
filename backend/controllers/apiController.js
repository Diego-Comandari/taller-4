const integrantes = require('../data/integrantes');

const getHealth = (req, res) => {
  res.json({
    ok: true,
    status: 'UP',
    mensaje: 'El API está funcionando correctamente',
    timestamp: new Date().toISOString(),
  });
};

const getInfo = (req, res) => {
  res.json({
    ok: true,
    mensaje: 'El API está funcionando y devolvió la información del equipo',
    materia: 'Programación Web',
    seccion: '01',
    integrantes,
  });
};

module.exports = { getHealth, getInfo };
