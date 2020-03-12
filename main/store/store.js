import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import saveMiddle from "./middleware/save";

const middlewares = [saveMiddle];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
