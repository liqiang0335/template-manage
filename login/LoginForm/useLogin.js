import { useEffect, useReducer } from "react";
import { message } from "antd";

const initState = {
  name: "",
  pass: "",
  remember: false
};

const reducer = (state, action) => {
  return { ...state, ...action };
};

/**
 * 用户登录逻辑
 * @param {Function=>Promise} submiter - ajax
 * @param {Function} onOk - 回调(存储Token/跳转等)
 * @param {String, Optional} nameKey - name 字段的名称
 * @param {Function, Optional} passKey - pass  字段的的名称
 *
 * @return {Object} - {state, dispatch, submit}
 */
export default function useLogin({
  submiter,
  onOk,
  nameKey = "name",
  passKey = "pass"
}) {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const localName = localStorage[nameKey];
    const localPass = localStorage[passKey];
    dispatch({
      name: localName,
      pass: localPass,
      remember: Boolean(localPass)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = () => {
    const { name, pass, remember } = state;
    if (!name) return message.error("请填写账号");
    if (!pass) return message.error("请填写密码");

    submiter({ [nameKey]: name.trim(), [passKey]: pass.trim() })
      .then(res => {
        localStorage[nameKey] = name;
        localStorage[passKey] = remember ? pass : "";
        setTimeout(() => {
          onOk(res);
        }, 300);
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  };

  return { state, dispatch, submit };
}
