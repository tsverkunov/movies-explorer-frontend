export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const checkRequest = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json()
    .then((data) => {
      throw new Error(data.error);
    });
};

export const getMovies = () => {
  return fetch(`${BASE_URL}/`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
    .then(checkRequest);
};