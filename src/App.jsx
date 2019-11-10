import React, { Component } from 'react';

import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: this.props.msg,
            switch: true,
        };
        this.doAction = this.doAction.bind(this);
    }

    doAction() {
        this.setState((state) => ({
            msg: 'hehehe',
            switch: !state.switch,
        }));
    }

    render() {
        return <div>
            <p onClick={this.doAction} className={this.state.switch ? 'true' : 'false'}>{this.state.msg}</p>
        </div>
    }
}

export default App;
