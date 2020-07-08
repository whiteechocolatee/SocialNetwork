import "./index.css";
import * as serviceWorker from "./serviceWorker";
// import state, { subscribe } from "./stateData/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./stateData/state";
// import { addPost } from "./stateData/state";
// import { updateNewPost } from "./stateData/state";
import { BrowserRouter } from "react-router-dom";

let rerenderTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={store.getState()}
          updateNewPost={store.updateNewPost.bind(store)}
          addPost={store.addPost.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderTree();

store.subscribe(rerenderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
