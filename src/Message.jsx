// import React, { Component } from 'react';

// class Message extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: this.props.msg,
//       msg2: 'eee',
//     }
//   }

//   render() {
//     return <div>
//       {/* <p>{this.state.msg2}</p> */}
//       <p>{this.state.msg}</p>
//     </div>;
//   }
// }

// export default Message;

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
      {/* <Message msg='aaaa' /> */}
      <p>{this.state.msg}</p>
    </div>
  }
}

export default Message;
