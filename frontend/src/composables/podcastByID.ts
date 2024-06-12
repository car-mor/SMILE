// src/composables/getPodcastByID.ts
import axios from 'axios';
import CryptoJS from 'crypto-js';

// Datos necesarios para la autenticación
const apiKey = 'EG9QUMQDS87ZPTPQKHMC';
const apiSecret = 'wUDFF2PbNkpzJBdmtwN#5Vbpgpg8b2mDwfyg8veC';
const apiHeaderTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
const hash = CryptoJS.SHA1(apiKey + apiSecret + apiHeaderTime).toString(CryptoJS.enc.Hex);

interface Podcast {
  id: string;
  title: string;
  image: string;
  url: string;
}

const getPodcastByID = async (itunesId: string): Promise<{ podcast: Podcast } | null> => {
  try {
    const response = await axios.get(
      `https://api.podcastindex.org/api/1.0/podcasts/byitunesid?id=${itunesId}`,
      {
        headers: {
          'X-Auth-Key': apiKey,
          'X-Auth-Date': apiHeaderTime,
          Authorization: hash,
        },
      },
    );

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = response.data;
    if (data.feed) {
      const podcast = {
        id: data.feed.id,
        title: data.feed.title,
        image: data.feed.image,
        url: data.feed.url,
        author: data.feed.author,
      };
      return { podcast };
    } else {
      throw new Error('No se encontraron datos del podcast.');
    }
  } catch (error) {
    console.error('Error fetching podcast by ID:', error);
    throw error;
  }
};

export default getPodcastByID;
