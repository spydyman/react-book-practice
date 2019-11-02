import React from 'react';
import ReactDOM from 'react-dom';

let dom = document.querySelector('#root');
let el = (
  <div>
    <h2>JSX sample</h2>
    <p>This is sample message.</p>
  </div>
)
ReactDOM.render(el, dom);