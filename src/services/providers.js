import User from './Models/User.js'
import Activity from './Models/Activity.js';

import { getUserData } from './api';
import { getActivityData } from './api'

export async function userData (id, setup) {
  const data = await getUserData(id, setup);
  const user = new User(data.data);
  return user;
}

export async function activityData(id, setup) {
  const data = await getActivityData(id, setup);
  const activity = new Activity(data.data);
  console.log(activity)
  return activity;
}


