import React from 'react';
import ReactDOM from 'react-dom';

let dom = document.querySelector('#root');

// let message_true = 'メッセージを表示します。';
// let message_false = 'メッセージはありません。';

// const msg_s = {
//   fontsize: '20pt',
//   fontWeight: 'bold',
//   color: 'red',
//   border: '1px solid blue'
// }

// let flg = true;

// let el = (
//   <div>
//     {flg ?
//       <p style={msg_s}>{message_true}</p>
//       :
//       <p style={msg_s}>{message_false}</p>
//     }
//   </div>
// )

// ------------------------------------------------------------------------------------

const list = {
  fontSize: '18pt',
  padding: '5px 50px',
}

let data = [
  <li>one</li>,
  <li>two</li>,
  <li>three</li>,
]

let el = (
  <div>
    <ul style={list}>
      {data}
    </ul>
  </div>
)

ReactDOM.render(el, dom);