console.log('App.js is running!');

//JSX

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This some info</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);