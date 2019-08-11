export const fetchWrapper = endPoint => {
  return fetch(endPoint).then(response => {
    if (response.status !== 404) {
      return response.json();
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  });
};

export const fetchPostWrapper = (endPoint, body) => {
  return fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
};
