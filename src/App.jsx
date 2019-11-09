import React from 'react';

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            APICODE: process.env.REACT_APP_API_CODE
        }
    }

    console() {
        console.log(this.state.APICODE);
    }

    render() {
        return (
            <div>
                {this.console()}
            </div>
        )
    }
}

export default App;
