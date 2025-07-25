import Config from 'react-native-config';

const BASE_URL = Config.API_URL;

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${Config.API_TOKEN}`,
      ...options?.headers,
    },
  });
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}
