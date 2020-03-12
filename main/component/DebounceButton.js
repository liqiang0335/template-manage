import React, { useCallback } from "react";
import { Button } from "antd";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";

/**
 * 节流按钮
 * @param {Function} onClick - 回调函数
 * @param {Number, Optional} duration - 时长, 默认2秒
 * @param {Boolean, Optional} leading - 是否使用leading节流, false则使用trailing节流
 * @param {Any, Optional} rest - 按钮其他属性
 */
export default function DebounceButton({
  onClick,
  duration = 2000,
  leading = true,
  ...rest
}) {
  const debounceOption = { leading, trailing: !leading };

  const submit = useCallback(
    debounce(() => onClick(), duration, debounceOption),
    [onClick]
  );
  return (
    <Button
      style={{ background: "#b87caf", borderColor: "#b87caf" }}
      type="primary"
      {...rest}
      onClick={submit}
    />
  );
}

DebounceButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  duration: PropTypes.number,
  leading: PropTypes.bool
};
