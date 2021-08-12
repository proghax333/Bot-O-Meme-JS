
import fetch from 'node-fetch';

const API_URL = "https://www.thisworddoesnotexist.com/api/random_word.json";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export default async function fakeword() {
  const response = await fetch(API_URL);
  const data = (await response.json()).word;

  return data;
}
