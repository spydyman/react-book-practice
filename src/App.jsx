import React from 'react';
import Button from './button';
// import { interval } from 'rxjs';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flg: false,
            curTime: '',
        };
        this.doClick = this.doClick.bind(this);
    }

    doClick() {
        console.log(this.state.flg);
        // let time = setInterval(function () { this.setState({ curTime: new Date().getSeconds().toLocaleString() }); }.bind(this), 1);
        let time = setInterval(function () { this.setState({ curTime: new Date().getMilliseconds().toLocaleString() }); }.bind(this), 10);
        this.setState((state) => (
            {
                flg: !state.flg,
                curTime: time,
            }
        ));
    }

    render() {
        return <div>
            {/* <p onClick={this.doClick}>aaa</p> */}
            {
                this.state.flg === false ?
                    ''
                    :
                    this.state.curTime
            }
            < Button start={this.doClick} ></Button >
        </div >;
    }
}

export default App;



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// import React, { FunctionComponent, useEffect, useState } from 'react'
// import { interval } from 'rxjs'

// const App: FunctionComponent = () => {
//     const [date, setDate] = useState(new Date())

//     useEffect(() => {
//         const subscription = interval(1000).subscribe(() => {
//             setDate(new Date())
//         })
//         return () => {
//             subscription.unsubscribe()
//         }
//     }, [])

//     return (
//         <p>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</p>
//     )
// }

// export default App;