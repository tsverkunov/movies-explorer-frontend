const MAIN_API_URL = 'https://api.it.dip.students.nomoredomains.xyz';

const checkRequest = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json()
    .then((data) => {
      throw new Error(data.error);
    });
};

export const getSavedMovies = () => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    },
    // authorization: 'e0347de3-3f3e-4b66-951f-031aa57f2a82',
    credentials: 'include',
  })
    .then(checkRequest);
};

export const postMovies = (card) => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(card)
    // authorization: 'e0347de3-3f3e-4b66-951f-031aa57f2a82',
    // credentials: 'include',
  })
    .then(checkRequest);
};
export const deleteMovie = (id) => {
  return fetch(`${MAIN_API_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    },
    // authorization: 'e0347de3-3f3e-4b66-951f-031aa57f2a82',
    credentials: 'include',
  })
    .then(checkRequest);
};

export const register = ({ name, email, password }) => {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(checkRequest);
};

export const authorized = ({ email, password }) => {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  })
    .then(checkRequest);
};

// export const logout = ({ email, password }) => {
//   return fetch(`${MAIN_API_URL}/signin`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password }),
//     credentials: 'include',
//   })
//     .then(checkRequest);
// };

export const getUserData = () => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    },
    credentials: 'include',
  })
    .then(checkRequest);
};