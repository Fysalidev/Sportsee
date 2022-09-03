import { fetchData } from "./fetch.js";

export const getUserData = async (id, setup) => {
  let url = setup
    ? `http://localhost:3000/user/${id}`
    : `../data/${id}/user.json`;
  const data = await fetchData(url);
  return data;
};
