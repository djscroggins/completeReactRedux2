// React enforces upper case class names to distinguish between components and html elements
class Header extends React.Component {
    // Must be defined for react components
    render () {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    <li>Option 1</li>
                    <li>Option 2</li>
                </ol>
            </div>
        );

    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button>Add an option</button>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));