import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async function google(query, limit = 10) {
  const searchQuery = query ? encodeURI(query) : '';

  const options = {
    method: 'GET',
    url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchQuery}&num=${limit}`,
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': process.env.RAPIDAPI_HOST
    }
  };
  const response = await axios.request(options);
  const results = response.data;

  return results;
}
