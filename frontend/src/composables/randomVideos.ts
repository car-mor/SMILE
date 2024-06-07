import axios from 'axios';

// Datos necesarios para la autenticación
const apiKey = 'AIzaSyCjZkK5-buahxVIyOEp2SO94yEogOGIJPY';

// URL base de la API
const VIDEOS_API_URL = 'https://youtube.googleapis.com/youtube/v3';

export default async function fetchRandomVideos(): Promise<any> {
  try {
    // Realiza una búsqueda de podcasts relacionados con la psicología en español
    const response = await axios.get(`${VIDEOS_API_URL}/search`, {
      params: {
        maxResults: 6,
        part: 'snippet',
        type: 'video',
        q: 'psicología',
        key: apiKey,
      },
    });

    return response.data.items; // Ajusta según la estructura de la respuesta
  } catch (error) {
    console.error('Error al buscar o reproducir el podcast:', error);
    throw error;
  }
}
