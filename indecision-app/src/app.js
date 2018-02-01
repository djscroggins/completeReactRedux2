console.log('App.js is running!');

//JSX

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [],
    i1: 'Item 1',
    i2: 'Item 2'
};

const onFormSubmit = (event) => {
    // Stops full page refresh and allows us to handle submission
    event.preventDefault();

    // Points to element that event started on
    const option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderIndecisionApp();
    }

};

const resetAppArray = () => {
    app.options.length = 0;
    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {/*{testInfo.subtitle && <p>{testInfo.subtitle}</p>}*/}
            {app.subtitle ? <p>{app.subtitle}</p> : false}
            {/*{getOptions(testInfo.options)}*/}
            <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>
            <button onClick={onMakeDecision}>What should I do?</button>
            <button disabled={app.options.length === 0} onClick={resetAppArray}>Remove All Options</button>
            <ol>
                {app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })}
            </ol>
            {/*Reference, don't call, onFormSubmit*/}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

};

const appRoot = document.getElementById('app');

renderIndecisionApp();







