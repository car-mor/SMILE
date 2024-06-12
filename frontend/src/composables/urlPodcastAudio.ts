import axios from 'axios';

export async function fetchPodcastEpisodes(
  rssUrl: string,
): Promise<{ title: string; enclosureUrl: string }[] | null> {
  try {
    const response = await axios.get(rssUrl, {
      headers: {
        'Content-Type': 'application/rss+xml',
      },
    });

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response.data, 'text/xml');

    const items = xmlDoc.getElementsByTagName('item');
    console.log('Número de elementos item:', items.length);
    if (items.length === 0) {
      return null;
    }

    const episodes = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const titleElement = item.getElementsByTagName('title')[0];
      const enclosureElement = item.getElementsByTagName('enclosure')[0];

      if (titleElement && enclosureElement) {
        const title = titleElement.textContent || 'Sin título';
        const enclosureUrl = enclosureElement.getAttribute('url') || '';
        episodes.push({ title, enclosureUrl });
      }
    }

    return episodes;
  } catch (error) {
    console.error('Error al obtener el XML del podcast:', error);
    return null;
  }
}
