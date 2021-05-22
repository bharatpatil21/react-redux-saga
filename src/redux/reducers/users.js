import * as type from "../types";

const initialState = {
  users: [],
};

export default function users(state = initialState, actions) {
  console.log('reducer users: ', state);
  console.log('reducer actions: ', actions);
  switch (actions.type) {
    case type.GET_USERS:
      return {
        ...state,
        users: actions.payload,
      };
    default:
      return state;
  }
}
