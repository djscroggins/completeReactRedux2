"use strict";

var count = 0;

var addOne = function addOne() {
    count++;
    // Update template display
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

// Remember this expression runs before *anything* is rendered to the screen
// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         {/*Note: className needed because class is a reserved word in JS*/}
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//     </div>
// );

// ReactDOM.render(templateTwo, appRoot);

// Note: This will be accomplished later using components; pedagogical
var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
