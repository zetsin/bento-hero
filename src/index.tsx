import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import moment from "moment";

moment.locale("en", {
  calendar: {
    sameDay: "[Today] M/D",
    nextDay: "[Tomorrow] M/D",
    lastDay: "[Yesterday] M/D",
    nextWeek: "dddd M/D",
    lastWeek: "dddd M/D",
    sameElse: "dddd M/D",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
