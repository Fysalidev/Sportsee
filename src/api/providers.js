import { getUserData } from "./api";
import { getActivityData } from "./api";
import { getAverageData } from "./api";
import { getPerformanceData } from "./api";

import User from "./Models/User.js";
import Activity from "./Models/Activity.js";
import Average from "./Models/Average.js";
import Perfomance from "./Models/Performance";

/**
 * Provid and formatted user data from api or mocked data
 * @param { String } id user id
 * @param { Boolean } [setup] Api state
 * @returns {Object}
 */

export async function userData(id, setup) {
  const data = await getUserData(id, setup);
  const user = new User(data.data);
  return user;
}

/**
 * Provid and formatted activity data from api or mocked data
 * @param { String } id user id
 * @param { Boolean } [setup] Api state
 * @returns {Object}
 */

export async function activityData(id, setup) {
  const data = await getActivityData(id, setup);
  const activity = new Activity(data.data);
  return activity;
}

/**
 * Provid and formatted average data from api or mocked data
 * @param { String } id user id
 * @param { Boolean } [setup] Api state
 * @returns {Object}
 */

export async function averageData(id, setup) {
  const data = await getAverageData(id, setup);
  const average = new Average(data.data);
  return average;
}

/**
 * Provid formatted performance data
 * @param { String } id user id
 * @param { Boolean } [setup] Api state
 * @returns {Object}
 */

export async function performanceData(id, setup) {
  const data = await getPerformanceData(id, setup);
  const performance = new Perfomance(data.data);
  return performance;
}
