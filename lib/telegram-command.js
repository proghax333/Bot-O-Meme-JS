
export default function parse(text) {
  return text.split(' ');
}

export function getMessage(text) {
  const tokens = parse(text);
  let query = [...tokens];
  query.shift();
  query = query.join(' ');

  return query;
}
