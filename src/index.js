import React, { Component } from "react";
import ReactDOM from "react-dom";
// 函数式组件的原理
// const createApp = props => {
//   return <h1>welcome {props.title}</h1>;
// };
// const App = createApp({
//   title: "dd"
// });
const App = props => {
  return <h1>welcome {props.title}</h1>;
};

ReactDOM.render(<App title="dd" />, document.querySelector("#root"));
