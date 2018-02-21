import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
// Load style scripts
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));


// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     );
// };
//
// // How do I pass in JSX for a particular page?
//
// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// );

// Passing template as prop with props.content in Layout
// ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));

// Access something passed in via children prop; props.children in Layout
// ReactDOM.render(<Layout><p>This is inline</p></Layout>, document.getElementById('app'));