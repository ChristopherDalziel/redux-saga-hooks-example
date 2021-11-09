import React from "react";
import ReactDOM from "react-dom";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// Redux saga
import createSagaMiddleware from "@redux-saga/core";

import allReducers from "./reducers";
import rootSaga from "./sagas/rootSaga";
import CounterComponent from "./components/CounterComponent";

// Middleware
const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <CounterComponent />
  </Provider>,
  document.getElementById("root")
);
