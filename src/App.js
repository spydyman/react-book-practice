import React, { Component } from 'react';
// import Rect from './Rect';

import './App.css';

class App extends Component {

  msgStyle = {
    fontSize: "24pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900",
  }

  btnStyle = {
    fontSize: "20pt",
    padding: "0px 10px"
  }

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      msg: "Hello",
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction(e) {
    this.setState((state) => ({
      counter: state.counter + 1,
      msg: 'count: ' + state.counter
    }));
  }

  render() {
    return <div>
      <h1>React</h1>
      <p style={this.msgStyle}>{this.state.msg}</p>
      <button style={this.btnStyle} onClick={this.doAction}>Click</button>
      {/* <Rect x="50" y="50" w="150" h="150" c="cyan" r="50" />
      <Rect x="150" y="100" w="150" h="150" c="magenta" r="75" />
      <Rect x="100" y="150" w="150" h="150" c="black" r="25" /> */}
    </div>;
  }
}

export default App;
