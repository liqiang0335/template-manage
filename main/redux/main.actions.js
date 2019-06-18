import { createAction, handleActions } from "redux-actions";

export const LOGOUT = "LOGOUT";
export const Logout = createAction(LOGOUT);

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LogoutSuccess = createAction(LOGOUT_SUCCESS);

const init = {};

export default handleActions({}, init);
