/**
 * 中间件
 */
const save = store => next => action => {
  // do something
  return next(action);
};

export default save;
