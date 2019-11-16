import React, { Component } from 'react';

class button extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return <div>
      <button type="submit" onClick={this.props.start} >start</button>
    </div >;
  }
}

export default button;