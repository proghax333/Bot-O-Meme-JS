
import fetch from 'node-fetch';

const language_code = 'en_GB';
const endpoint = 'entries';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default async function means(word) {
    const URL = `https://api.dictionaryapi.dev/api/v2/${endpoint}/${language_code}/${word}`;
    const response = await fetch(URL);
    const data = await response.json();

    return data[0];
}
