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
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    },
    // authorization: 'e0347de3-3f3e-4b66-951f-031aa57f2a82',
    // credentials: 'include',
  })
    .then(checkRequest);
};