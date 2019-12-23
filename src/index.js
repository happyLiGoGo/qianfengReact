import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
// 类组件渲染的原理
// const app = new App({
//   title: "dd"
// }).render();
// render(app, document.querySelector("#root"));
render(<App title="dd" />, document.querySelector("#root"));
