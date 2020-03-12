import { combineReducers } from "redux";
import * as Types from "@store/Types";
import cloneDeep from "lodash/cloneDeep";
// combine
const appReducer = combineReducers({});
/**
 * reducer
 */
export default function rootReducer(state = {}, action) {
  const { type, payload } = action;

  if (type === Types.RECOVER) {
    return cloneDeep(payload);
  }

  return appReducer(state, action);
}
