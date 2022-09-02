import {fetchData} from './fetch.js'

export const getUserData = async (id, setup) => {
  let url = (setup)
    ? `../data/${id}/user.json`
    : `http://localhost:3000/user/${id}`;
  const data = await fetchData(url);
  return data;
};