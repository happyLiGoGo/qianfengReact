import React, { Component, createContext } from "react";
import ReactDOM from "react-dom";

console.log(createContext());
const { Provider, Consumer: CounterConsumer } = createContext();

class CounterProvider extends Component {
  constructor() {
    super();
    this.state = {
      count: 100
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <Provider
        value={{
          count: this.state.count,
          onIncrementCount: this.incrementCount,
          onDecrementCount: this.decrementCount
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
class CountBtn extends Component {
  render() {
    return (
      <CounterConsumer>
        {({ onIncrementCount, onDecrementCount }) => {
            const handler = this.props.type === 'increment' ? onIncrementCount : onDecrementCount
          return <button onClick={handler}>{this.props.children}</button>;
        }}
      </CounterConsumer>
    );
  }
}
class Counter extends Component {
  render() {
    return (
      <CounterConsumer>
        {({ count }) => {
          console.log(count);
          return <span>{count}</span>;
        }}
      </CounterConsumer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <CountBtn type="decrement">-</CountBtn>
        <Counter />
        <CountBtn type="increment">+</CountBtn>
      </>
    );
  }
}

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.querySelector("#root")
);
