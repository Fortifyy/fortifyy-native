import createSagaMiddleware from "redux-saga";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "../reducers";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export default store;
