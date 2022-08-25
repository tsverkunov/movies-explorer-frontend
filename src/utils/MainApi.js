// export const BASE_URL = 'https://api.it.dip.students.nomoredomains.xyz';
//
// const checkRequest = (res) => {
//   if (res.ok) {
//     return res.json();
//   }
//   return res.json()
//     .then((data) => {
//       throw new Error(data.error);
//     });
// };
//
// export const postMovies = () => {
//   return fetch(`${BASE_URL}/`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       // 'Authorization': `Bearer ${token}`,
//     },
//     // authorization: 'e0347de3-3f3e-4b66-951f-031aa57f2a82',
//     // credentials: 'include',
//   })
//     .then(checkRequest);
// };