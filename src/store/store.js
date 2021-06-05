import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchReducer } from "../components/reducers/fetchReducer";
import { quizReducer } from "../components/reducers/quizReducer";

const reducer = combineReducers({
  quiz: quizReducer,
  fetch: fetchReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
