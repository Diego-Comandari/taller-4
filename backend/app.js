const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, mensaje: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`API Taller IV escuchando en http://localhost:${PORT}`);
});
