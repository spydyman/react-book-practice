import React, { Component } from 'react';

import './App.css';


class App extends Component {

    text = 'aaarr';

    constructor(props) {
        super(props);
        this.state = {
            input01: '0',
            input02: '0',
            // msg: this.props.msg,
            // switch: true,
            // msg02: this.text,
        };
        // this.doAction = this.doAction.bind(this);
        // this.doChange = this.doChange.bind(this);
        this.doChange = this.doChange.bind(this);
    }

    // doAction() {
    //     this.setState((state) => ({
    //         msg: 'hehehe',
    //         switch: !state.switch,
    //     }));
    // }

    doChange(name) {
        return (event) => {
            this.setState({
                [name]: Number(event.target.value),
            });
        }
    }

    render() {
        return <div>
            {/* <p onClick={this.doAction} className={this.state.switch ? 'true' : 'false'}>{this.state.msg}</p> */}
            <input type="number" onChange={this.doChange('input01')} />
            <br />
            <input type="number" onChange={this.doChange('input02')} />
            <br />
            <p>{this.state.input01}</p>
            <p>{this.state.input02}</p>
            {/* <p>{this.state.input01 + this.state.inpu02}</p> */}
            <p>{this.state.input01 + this.state.input02}</p>
        </div >
    }
}

export default App;
