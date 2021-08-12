
import fetch from 'node-fetch';

const API_URL = "https://meme-api.herokuapp.com/gimme";

export default async function meme() {
  const response = await fetch(API_URL);
  const data = await response.json();
  
  return data;
}
