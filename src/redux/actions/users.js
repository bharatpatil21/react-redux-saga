import * as type from "../types";


export function getUsers(users) {
  console.log("action getUsers", users);
  return {
    type: type.GET_USERS,
    payload: users
  }
}