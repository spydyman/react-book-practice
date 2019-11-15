import React, { Component } from 'react';

import Message from './Message';

import './App.css';

class App extends Component {

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

export default App;
