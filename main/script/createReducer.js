import produce from "immer";

export default function createReducer(handlers, init) {
  return (state = init, action) => {
    const { type, payload } = action;
    const handler = handlers[type];
    if (!handler) return state;
    return produce(state, draft => {
      handler(draft, payload);
    });
  };
}
