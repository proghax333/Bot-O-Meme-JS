import fetch from 'node-fetch';

export const API_URL = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

export default async function insult() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data["insult"];
}
