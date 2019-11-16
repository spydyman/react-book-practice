import React, { Component } from 'react';

import './App.css';

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: this.props.msg,
    }
  }

  render() {
    return <div>
      <p>{this.state.msg}</p>
    </div>
  }
}

export default Message;
