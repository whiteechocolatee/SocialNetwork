import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [
  { post: "Hi man!!", id: 1, likesCount: 42 },
  { post: "i am fine!", id: 2, likesCount: 23 },
  { post: "The greatest page ever!!!!", id: 3, likesCount: 12 },
  { post: "blablabla", id: 4, likesCount: 63 },
  { post: "haha", id: 5, likesCount: 17 },
];

let messages = [
  { message: "Hi!", id: 1 },
  { message: "How are u?", id: 2 },
  { message: "Fine!", id: 3 },
  { message: "Hello guys!", id: 4 },
  { message: "What u say about...", id: 5 },
];

let dialogs = [
  { name: "Liza", id: 1 },
  { name: "Nikita", id: 2 },
  { name: "Kirill", id: 3 },
  { name: "Kseniya", id: 4 },
  { name: "Denis", id: 5 },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
