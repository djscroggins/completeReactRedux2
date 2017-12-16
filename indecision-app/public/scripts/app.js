'use strict';

console.log('App.js is running!');

//JSX

var testInfo = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['One', 'Two'],
    i1: 'Item 1',
    i2: 'Item 2'
};

function getOptions(optionsIn) {
    if (optionsIn.length > 0) {
        return React.createElement(
            'p',
            null,
            '"Here are your options:" ',
            optionsIn
        );
    }
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        testInfo.title
    ),
    testInfo.subtitle ? React.createElement(
        'p',
        null,
        testInfo.subtitle
    ) : false,
    getOptions(testInfo.options),
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

var user = {
    name: 'David Scroggins',
    age: 35,
    location: 'Chicago, IL'
};

function getLocation(locationIn) {
    if (locationIn) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            locationIn
        );
    }
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
