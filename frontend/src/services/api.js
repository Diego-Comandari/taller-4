const fetchJson = async (url) => {
  const respuesta = await fetch(url)
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al consultar ${url}`)
  }
  return respuesta.json()
}

export const getHealth = () => fetchJson('/api/health')

export const getInfo = () => fetchJson('/api/info')
