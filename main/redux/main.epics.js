import { from, pipe } from "rxjs";
import { switchMap, map, tap, catchError } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";
import * as main from "./main.actions";

import {
  GET_LOGIN_USER,
  GetLoginUserSuccess,
  GetLoginUserFail
} from "./user.actions";

import * as api from "./api";
import { message } from "antd";

const ajax = (api, success, error) => {
  return pipe(
    switchMap(() =>
      from(api).pipe(
        map(res => success(res)),
        catchError(() => error())
      )
    )
  );
};

/**
 * 登录用户信息
 */
const loginUserData = action => {
  return action.pipe(
    ofType(GET_LOGIN_USER),
    switchMap(() =>
      from(api.getLoginUser()).pipe(
        map(res => GetLoginUserSuccess(res)),
        catchError(() => GetLoginUserFail())
      )
    )
  );
};

const logout = action$ =>
  action$.pipe(
    ofType(main.LOGOUT),
    switchMap(() =>
      from(api.logout()).pipe(
        map(() => main.LogoutSuccess()),
        tap(() => {
          message.success("退出登录成功");
          setTimeout(() => {
            window.location.href = "/platform/login.html";
          }, 1000);
        })
      )
    )
  );

export default combineEpics(loginUserData, logout);
