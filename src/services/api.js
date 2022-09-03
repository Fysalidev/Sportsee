import { fetchData } from "./fetch.js";

export const getUserData = async (id, setup) => {
  let url = setup
    ? `http://localhost:3000/user/${id}`
    : `../data/${id}/user.json`;
  const data = await fetchData(url);
  return data;
};

export const getActivityData = async (id, setup) => {
  let url = setup
    ? `http://localhost:3000/user/${id}/activity`
    : `../data/${id}/activity.json`;
  const data = await fetchData(url);
  return data;
};

export const getAverageData = async (id, setup) => {
  let url = setup
    ? `http://localhost:3000/user/${id}/average-sessions`
    : `../data/${id}/average.json`;
  const data = await fetchData(url);
  console.log(data)
  return data;
};

export const getPerformanceData = async (id, setup) => {
  let url = setup
    ? `http://localhost:3000/user/${id}/performance`
    : `../data/${id}/performance.json`;
  const data = await fetchData(url);
  return data;
};
