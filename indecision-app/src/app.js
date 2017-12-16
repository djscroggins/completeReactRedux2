console.log('App.js is running!');

//JSX

const testInfo = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['One', 'Two'],
    i1: 'Item 1',
    i2: 'Item 2'
};

function getOptions(optionsIn) {
    if (optionsIn.length > 0) {
        return <p>"Here are your options:" {optionsIn}</p>
    }
}

const template = (
    <div>
        <h1>{testInfo.title}</h1>
        {/*{testInfo.subtitle && <p>{testInfo.subtitle}</p>}*/}
        {testInfo.subtitle ? <p>{testInfo.subtitle}</p> : false}
        {getOptions(testInfo.options)}
        <ol>
            <li>{testInfo.i1}</li>
            <li>{testInfo.i2}</li>
        </ol>
    </div>
);

const user = {
    name: 'David Scroggins',
    age: 35,
    location: 'Chicago, IL'
};

function getLocation(locationIn) {
    if (locationIn) {
        return <p>Location: {locationIn}</p>;
    }
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);