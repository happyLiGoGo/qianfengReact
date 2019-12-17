import React, { Component } from 'react'
import {CounterConsumer} from '../counterStore'

export default class Counter extends Component {
    render() {
      return (
        <CounterConsumer>
          {/* 使用Consumer接收count */}
          {({ count }) => {
            console.log(count);
            return <span>{count}</span>;
          }}
        </CounterConsumer>
      );
    }
  }