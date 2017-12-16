'use strict';

console.log('App.js is running!');

//JSX

var testInfo = { title: 'Indecision App',
    info: 'This is some info',
    i1: 'Item 1',
    i2: 'Item 2' };

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        testInfo.title
    ),
    React.createElement(
        'p',
        null,
        testInfo.info
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            testInfo.i1
        ),
        React.createElement(
            'li',
            null,
            testInfo.i2
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
