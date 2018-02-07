// import './utils';
// default can be called anything you want! This is the subtract function from utils
// import anythingIWant, {square, add} from "./utils.js";
// import isSenior, {isAdult, canDrink} from "./person.js";
//
// console.log('app.js is running!!!!!');
// console.log(square(4));
// console.log(add(2, 3));
// console.log(anythingIWant(100, 81));
//
//
// console.log('An adult?', isAdult(13));
// console.log('Can drink?', canDrink(13));
// console.log('An adult?', isAdult(18));
// console.log('Can drink?', canDrink(18));
// console.log('An adult2?', isAdult(21));
// console.log('Can drink2?', canDrink(21));
// console.log('Is senior?', isSenior(64));
// console.log('Is senior2?', isSenior(65));

// installing and import from npm packages
// yarn add validator@8.0.0

// import validator from 'validator';
//
// console.log(validator.isEmail('test@gmail.com'));

// do with react
// yarn add react@16.0.0 react-dom@16.0.0
// yarn add react@16.0.0 react-dom@16.0.0
// note: need to work around by using createElement because we need Babel and support for JSX

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const template = React.createElement('p', {}, 'Testing 123');
// ReactDOM.render(template, document.getElementById('app'));

// Teaching WebPack how to compile jsx
// Loader lets you customize behavior of WebPack see webpack.config.js

import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>THIS IS JSX FROM WEBPACK</p>;
ReactDOM.render(template, document.getElementById('app'));
