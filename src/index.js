import "./index.css";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./stateData/redux-store";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./StoreContext";

let rerenderTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <StoreContext.Provider value={store}>
          <App
            //state={store.getState()}
            dispatch={store.dispatch.bind(store)}
            //store={store}
          />
        </StoreContext.Provider>
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
