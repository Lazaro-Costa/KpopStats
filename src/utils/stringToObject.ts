
export default function converterStringParaObjeto(str: string): Record<string, string> {
  const keyValuePairs = str.split('_');
  const result: Record<string, string> = {};

  if (keyValuePairs.length === 0 || keyValuePairs[0] === '') {
    return result;
  }
  keyValuePairs.forEach(pair => {
    const [key, value] = pair.split(':');
    result[key.trim()] = value.trim();
  });

  return result;
}
