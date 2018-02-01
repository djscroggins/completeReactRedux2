// React enforces upper case class names to distinguish between components and html elements
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {
    // Must be defined for react components
    render () {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
                <p>Length of options: {this.props.options.length}</p>
                {this.props.options.map((o) => <Option key={o} optionText={o}/>
                )}


            </div>
        );

    }
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props.optionText}</div>
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));