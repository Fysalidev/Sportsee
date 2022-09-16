import { fetchData } from "./fetch.js";

/**
 * Fetch user data from Api or Mocked data
 * @param {string} id
 * @param {boolean} setup
 * @returns {object}
 */
export const getUserData = async (id, setup) => {
  let url = setup
    ? `http://localhost:3000/user/${id}`
    : `../data/${id}/user.json`;
  const data = await fetchData(url);
  return data;
};

/**
 * Fetch activity data from Api or Mocked data
 * @param {String} id
 * @param {Boolean} setup
 * @returns {Object}
 */
export const getActivityData = async (id, setup) => {
  let url = setup
    ? `http://localhost:3000/user/${id}/activity`
    : `../data/${id}/activity.json`;
  const data = await fetchData(url);
  return data;
};

/**
 * Fetch average data from Api or Mocked data
 * @param {String} id
 * @param {Boolean} setup
 * @returns {Object}
 */
export const getAverageData = async (id, setup) => {
  let url = setup
    ? `http://localhost:3000/user/${id}/average-sessions`
    : `../data/${id}/average.json`;
  const data = await fetchData(url);
  return data;
};

/**
 * Set performance data fetch url
 * @param {String} id
 * @param {Boolean} setup
 * @returns {Object}
 */

export const getPerformanceData = async (id, setup) => {
  let url = setup
    ? `http://localhost:3000/user/${id}/performance`
    : `../data/${id}/performance.json`;
  const data = await fetchData(url);
  return data;
};
