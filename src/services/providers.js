import { getUserData } from "./api";
import { getActivityData } from "./api";
import { getAverageData } from "./api";

import User from "./Models/User.js";
import Activity from "./Models/Activity.js";
import Average from "./Models/Average.js";

export async function userData(id, setup) {
  const data = await getUserData(id, setup);
  const user = new User(data.data);
  return user;
}

export async function activityData(id, setup) {
  const data = await getActivityData(id, setup);
  const activity = new Activity(data.data);
  return activity;
}

export async function averageData(id, setup) {
  const data = await getAverageData(id, setup);
  const average = new Average(data.data);
  return average;
}
