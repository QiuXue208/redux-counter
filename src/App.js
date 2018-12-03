import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>value:<span>{this.props.store.getState()}</span></p>
        <button onClick={this.props.add}>+1</button>
        <button onClick={this.props.addTwo}>+2</button>
        <button onClick={this.props.minus}>-1</button>
        <button onClick={this.props.addAsync}>2S后+1</button>
      </div>
    );
  }
}

export default App;
