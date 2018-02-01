let count = 0;

const addOne = () => {
    count++;
    // Update template display
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
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
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            {/*Note: className needed because class is a reserved word in JS*/}
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();