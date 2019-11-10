import React, { Component } from 'react';

import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: 'Hello',
        }
    }

    render() {
        return <div>
            <p>{this.state.msg}</p>
        </div>
    }
}

export default App;
