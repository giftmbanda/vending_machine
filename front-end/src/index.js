import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

ReactDOM.render(
  <>
    <Dashboard />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
