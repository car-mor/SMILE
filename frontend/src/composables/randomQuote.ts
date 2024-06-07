import axios from 'axios';

export default async function fetchRandomQuote(): Promise<any> {
  const options = {
    method: 'GET',
    url: 'https://api.quotable.io/random',
    headers: { Accept: 'application/json' },
    params: {
      tags: 'Famous Quotes|Wisdom|Change|Character|Courage|Creativity|Education|Failure|Faith|Freedom|Friendship|Generosity|Gratitude|Happiness|Health|Honor|Inspirational|Knowledge|Life|Love|Motivational|Pain|Perseverance|Philosophy|Power Quotes|Sadness|Self Help|Spirituality|Success|Time|Tolerance|Truth|Virtue|Weakness|Wellness|Work',
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error('Error al obtener la cita:', error);
    throw error;
  }
}
