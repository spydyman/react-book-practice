import React, { Component } from 'react';
// import List from "./List";
import Message from "./Message";
// import Rect from './Rect';

import './App.css';

class App extends Component {

  input = '';

  msgStyle = {
    fontSize: "24pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
  }

  inputStyle = {
    fontSize: "12pt",
    padding: "5px",
  }

  // area = {
  //   width: "500px",
  //   height: "500px",
  //   border: "1px solid blue"
  // }

  // btnStyle = {
  //   fontSize: "20pt",
  //   padding: "0px 10px"
  // }

  constructor(props) {
    super(props);
    this.state = {
      message: 'type your name'
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      message: 'Hello, ' + this.input + '！！'
    });
    event.preventDefault();
  }

  doAction(e) {
    let x = e.pageX;
    let y = e.pageY;
    this.data.push({ x: x, y: y });
    this.setState({
      list: this.data
    });
  }

  draw(d) {
    let s = {
      position: "absolute",
      left: (d.x - 25) + "px",
      top: (d.y - 25) + "px",
      width: "50px",
      height: "50px",
      backgroundColor: "#66f3",
    };
    return <div style={s}></div>;
  }

  render() {
    return <div>
      <h1>React</h1>
      <h2>{this.state.message}</h2>
      <form action="" onSubmit={this.doSubmit}>
        <label>
          <span style={this.inputStyle}></span>Message:
          <input
            type="text"
            style={this.inputStyle}
            onChange={this.doChange}
            required
            pattern="[A-Za-z _,.]+"
          />
        </label>
        <input type="submit" style={this.inputStyle} value="Click" />
      </form>
    </div>;
  }
}

export default App;
