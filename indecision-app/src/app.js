// React enforces upper case class names to distinguish between components and html elements
// This example uses ES6 class syntax
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
    handlePick () {
        alert('handlePick')
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.handlePick}>What should I do?</button>
                </div>

            </div>
        );
    }
}

class Options extends React.Component {
    // Override constructor
    constructor(props) {
        super(props);
        // Ensures handleRemoveAll always bound to this context
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll () {
        console.log(this.props.options)
    }

    render() {
        return (
            <div>
                {/*Will lose this contenxt if not explicitly bound*/}
                <button onClick={this.handleRemoveAll}>Remove all</button>
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

    handleAddOption (event) {

        event.preventDefault();

        // Trim string to avoid spaces being read as input
        const option = event.target.elements.option.value.trim();

        if (option) {
            alert('handleOption');
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
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