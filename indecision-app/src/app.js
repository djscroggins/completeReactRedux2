// React enforces upper case class names to distinguish between components and html elements
// This example uses ES6 class syntax
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing four']
        };
    }

    handleDeleteOptions () {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick () {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }


    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                {/*Determine if options exist and pass this to Action component*/}
                <Action
                    hasOptions={this.state.options.length > 0}
                    // Pass method to choose option to Action component
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    // Pass method to delete option as prop  to Options component
                    handleDeleteOptions={this.handleDeleteOptions}
                />
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
                <div>
                    <button
                        onClick={this.props.handlePick}
                        // Check if options exist, if they don't disable button
                        disabled={!this.props.hasOptions}
                    >What should I do?</button>
                </div>

            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                {/*Call props method from IndecisionApp component*/}
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
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