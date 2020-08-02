import React from "react";
import "./sass/style.scss";
import Router from "./router";
import Reducer from "./reducer/";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(Reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
