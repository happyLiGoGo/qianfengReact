import React from "react";
import ReactDOM from "react-dom";
import { CounterProvider } from "./components/counterStore";
import App from "./App";

console.log(CounterProvider);

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.querySelector("#root")
);
