import axios from 'axios';
import CryptoJS from 'crypto-js';

// Datos necesarios para la autenticación
const apiKey = 'EG9QUMQDS87ZPTPQKHMC';
const apiSecret = 'wUDFF2PbNkpzJBdmtwN#5Vbpgpg8b2mDwfyg8veC';
const apiHeaderTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
const hash = CryptoJS.SHA1(apiKey + apiSecret + apiHeaderTime).toString(CryptoJS.enc.Hex);

// URL base de la API
const PODCAST_API_URL = 'https://api.podcastindex.org/api/1.0/search';

export default async function fetchRandomSpanishPsychologyPodcast(): Promise<any[]> {
  try {
    // Realiza una búsqueda de podcasts relacionados con la psicología en español
    const response = await axios.get(`${PODCAST_API_URL}/byterm`, {
      params: {
        q: 'psicología', // Palabra clave de búsqueda para la psicología
      },
      headers: {
        'X-Auth-Key': apiKey,
        'X-Auth-Date': apiHeaderTime,
        Authorization: hash,
      },
    });

    const podcasts = response.data.feeds; // Ajusta según la estructura de la respuesta
    if (podcasts.length === 0) {
      throw new Error('No se encontraron podcasts de psicología en español');
    }

    // Devuelve los podcasts
    return podcasts;
  } catch (error) {
    console.error('Error al buscar o reproducir el podcast:', error);
    throw error;
  }
}
