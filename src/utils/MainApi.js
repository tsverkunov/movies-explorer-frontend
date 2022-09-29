const MAIN_API_URL = 'https://api.it.dip.students.nomoredomains.xyz';
// const MAIN_API_URL = 'http://localhost:3000';

const checkRequest = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json()
    .then((data) => {
      throw new Error(data.message);
    });
};

export const getSavedMovies = () => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
    credentials: 'include',
  })
    .then(checkRequest);
};

export const postMovies = ({
                             movieId,
                             nameRU,
                             nameEN,
                             director,
                             country,
                             year,
                             duration,
                             description,
                             trailerLink,
                             thumbnail,
                             image,
                           }) => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        movieId,
        nameRU,
        nameEN,
        director,
        country,
        year,
        duration,
        description,
        trailerLink,
        thumbnail,
        image,
      },
    ),
    credentials: 'include',
  })
    .then(checkRequest);
};

export const deleteMovie = (id) => {
  return fetch(`${MAIN_API_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
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

export const updateProfile = ({ name, email }) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
    credentials: 'include',
  })
    .then(checkRequest);
};

export const getProfile = () => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then(checkRequest);
};

export const logout = (email) => {
  return fetch(`${MAIN_API_URL}/signout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email }),
  })
    .then(checkRequest);
};
