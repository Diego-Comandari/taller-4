# Taller de ejercicios IV — Programación Web

**Ciclo 02, 2026 · Sección 01**

| Integrante | Edad | Carrera | Materias aprobadas |
|---|---|---|---|
| Diego Gabriel Bonilla Comandari | 20 | Ingeniería Informática | 13 |
| Pablo Antonio Brito Elias | 19 | Ingeniería Informática | 11 |

## Estructura del proyecto

```
Taller4-programacion-web/
├── backend/                  # API REST con Express
│   ├── app.js                # Punto de entrada del servidor (puerto 3000)
│   ├── routes/api.js         # Definición de rutas /api/health y /api/info
│   ├── controllers/          # Lógica de cada endpoint
│   └── data/integrantes.js   # Datos de los integrantes
├── frontend/                 # Vite + React + Reactstrap
│   ├── vite.config.js        # Proxy /api -> http://localhost:3000
│   └── src/
│       ├── App.jsx           # Título "Taller IV" y composición de secciones
│       ├── services/api.js   # Funciones que consumen los endpoints
│       └── components/
│           ├── HealthSection.jsx / .css  # Consume api/health (h4, p, div, section + CSS)
│           └── InfoIntegrantes.jsx       # Consume api/info (componentes Reactstrap)
└── Integrantes-Taller-IV.pdf
```

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/health` | Indica que el API está funcionando |
| GET | `/api/info` | Devuelve nombre, edad, carrera y materias aprobadas de los integrantes |

## Cómo ejecutar

Se necesitan dos terminales.

**1. Backend**

```bash
cd backend
npm install
npm start        # http://localhost:3000
```

**2. Frontend**

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

Abrir http://localhost:5173. El frontend consume `/api/health` y `/api/info`, y Vite las redirige al backend mediante el proxy configurado en `vite.config.js`.
