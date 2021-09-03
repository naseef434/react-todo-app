import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Counter from './Counter';
// import Counternew from './Counternew';
// import Demo from './Demo';
// import EventClass from './Eventclas';
// import ListTest  from './List';
import TodoApp from './Todo';
// setInterval(() => {
//   ReactDOM.render(<Counter />,document.getElementById('root'));
// },1000)

ReactDOM.render(<TodoApp />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
