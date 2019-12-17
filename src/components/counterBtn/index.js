import React, { Component } from "react";
import { CounterConsumer } from "../counterStore";

export default class CounterBtn extends Component {
  render() {
    return (
      <CounterConsumer>
        {/* 使用Consumer接收count */}
        {({ onIncrementCount, onDecrementCount }) => {
          const handler = (this.props.type ==="increment"
            ? onIncrementCount
            : onDecrementCount);
          return <button onClick={handler}>{this.props.children}</button>;
        }}
      </CounterConsumer>
    );
  }
}
