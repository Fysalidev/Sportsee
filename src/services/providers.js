import User from './Models/User.js'
import { getUserData } from './api';

export async function userData (id, setup) {
  const data = await getUserData(id, setup);
  console.log(data)
  const user = new User(data.data);
  console.log(user)
  return user;
}
