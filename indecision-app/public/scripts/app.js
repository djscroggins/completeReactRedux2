'use strict';

console.log('build-it-visible.js is running!');

var app = {
    title: 'Visibility Toggle',
    visibilityState: false,
    details: 'Here are the hidden details.'
};

var changeVisibilityState = function changeVisibilityState() {
    app.visibilityState = !app.visibilityState;
    renderTemplate();
};

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: changeVisibilityState },
            app.visibilityState ? 'Hide details' : 'Show details'
        ),
        !app.visibilityState ? null : React.createElement(
            'p',
            null,
            app.details
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderTemplate();
