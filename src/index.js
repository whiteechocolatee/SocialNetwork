import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";


// const indexData = () =>{
//   return(
//     let dialogsData = [
//     { name: "Liza", id: 1 },
//     { name: "Nikita", id: 2 },
//     { name: "Kirill", id: 3 },
//     { name: "Kseniya", id: 4 },
//     { name: "Denis", id: 5 },
//   ];
  
//   let messageData = [
//     { message: "Hi!", id: 1 },
//     { message: "How are u?", id: 2 },
//     { message: "Fine!", id: 3 },
//     { message: "Hello guys!", id: 4 },
//     { message: "What u say about...", id: 5 },
//   ];
//   );
// }


  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// export default index;
