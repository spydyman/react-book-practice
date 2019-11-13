import React, { Component } from 'react';

import './App.css';


class App extends Component {

    text = 'aaarr';

    constructor(props) {
        super(props);
        this.state = {
            msg: this.props.msg,
            switch: true,
            msg02: this.text,
        };
        this.doAction = this.doAction.bind(this);
    }

    doAction() {
        this.setState((state) => ({
            msg: 'hehehe',
            switch: !state.switch,
        }));
    }

    doChange() {
        this.setState((state) => ({

        }));
    }

    render() {
        return <div>
            {/* <p onClick={this.doAction} className={this.state.switch ? 'true' : 'false'}>{this.state.msg}</p> */}
            <input type="text" />
            <br />
            <label htmlFor="">{this.state.msg02}</label>
        </div >
    }
}

export default App;
