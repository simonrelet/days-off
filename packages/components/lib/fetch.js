function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export default function fetch(url, options) {
  return window
    .fetch(url, {
      ...options,
      credentials: 'same-origin',
    })
    .then(checkStatus);
}

export function parseJSON(response) {
  return response.json();
}

export function handleError(error) {
  console.error('Request failed:', error);
}
