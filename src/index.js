import "./index.css";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./stateData/state";
import { BrowserRouter } from "react-router-dom";

let rerenderTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderTree(store.getState());

store.subscribe(rerenderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
