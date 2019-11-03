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

// const list = {
//   fontSize: '18pt',
//   padding: '5px 50px',
// }

// let data = [
//   <li>one</li>,
//   <li>two</li>,
//   <li>three</li>,
// ]

// let el = (
//   <div>
//     <ul style={list}>
//       {data}
//     </ul>
//   </div>
// )

// ------------------------------------------------------------------------------------

// const table = {
//   fontSize: '16pt',
//   padding: '5px 50px',
// }

// const th = {
//   color: 'white',
//   backgroundColor: '#006',
//   padding: '5px 15px',
// }

// const td = {
//   color: 'black',
//   padding: '5px 15px',
//   border: '1px solid gray',
// }

// let data = [
//   { name: 'Taro', mail: 'taro@yamada', age: 45 },
//   { name: 'Hanako', mail: 'hanako@flower', age: 37 },
//   { name: 'Sachiko', mail: 'sachiko@happy', age: 29 },
// ]

// let el = (
//   <div>
//     <table style={table}>
//       <tr>
//         <th style={th}>name</th>
//         <th style={th}>mail</th>
//         <th style={th}>age</th>
//       </tr>
//       {data.map((value) => (
//         <tr>
//           <td style={td}>{value.name}</td>
//           <td style={td}>{value.mail}</td>
//           <td style={td}>{value.age}</td>
//         </tr>
//       ))}
//     </table>
//   </div>
// )

// ------------------------------------------------------------------------------------

// const p = {
//   fontSize: "20pt",
//   padding: "10px",
//   backgroundColor: "blue",
//   color: "white",
//   cursor: "pointer"
// };

// var counter = 0;

// let doAction = (event) => {
//   counter++;
//   let el = (
//     <div>
//       <p onClick={doAction} style={p}>
//         count: {counter}
//       </p>
//     </div>
//   )
//   ReactDOM.render(el, dom);
// };

// doAction();