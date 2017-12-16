console.log('App.js is running!');

//JSX

var testInfo = {title: 'Indecision App',
                info: 'This is some info',
                i1: 'Item 1',
                i2: 'Item 2'};

var template = (
    <div>
        <h1>{testInfo.title}</h1>
        <p>{testInfo.info}</p>
        <ol>
            <li>{testInfo.i1}</li>
            <li>{testInfo.i2}</li>
        </ol>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);