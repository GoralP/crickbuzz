import { combineReducers, createStore, applyMiddleware } from "redux";
import playersReducer from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ playersReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
