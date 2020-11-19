import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'regenerator-runtime/runtime'

let anchorPoint = document.getElementById("app");

ReactDOM.render(<App/>, anchorPoint);
