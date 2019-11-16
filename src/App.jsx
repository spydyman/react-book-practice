import React from 'react';
import Button from './button';
import { interval } from 'rxjs';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };
        this.doClick = this.doClick.bind(this);
    }

    doClick = () => {
        let now = new Date();

        this.setState(() => {
            // return { timeNow: now.getMilliseconds() };
        });
    };

    render() {
        return <div>
            <p>{this.state.timeNow}</p>
            <Button start={() => { this.doClick() }} ></Button>
        </div>;
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