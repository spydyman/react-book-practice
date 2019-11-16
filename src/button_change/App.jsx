import React from 'react';

// import Message from './Message';

// import './App.css';

// class App extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             msg: this.props.msg,
//         }
//     }

//     render() {
//         return <div>
//             <Message msg='aae' />
//         </div>
//     }
// }

// export default App;

import PropTypes from 'prop-types';
import Child from './Child';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoge: 'hogehoge'
        };
    }

    hogeFunc() {
        this.setState({ hoge: '変えたぞ' });
    }

    render() {
        return <div>
            <p>{this.state.hoge}</p>
            <Child dataHoge={() => { this.hogeFunc(); }} />
        </div>;
    }
}

export default Parent;