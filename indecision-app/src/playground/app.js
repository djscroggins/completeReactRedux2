// React enforces upper case class names to distinguish between components and html elements
// This example uses ES6 class syntax
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount () {

        try {
            // Retrieve options array from local storage
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                // Note: implictly returning options same as options: options
                this.setState(() => ({options}));
            }
        } catch (e) {
            // Do nothing if json empty; just fall back to empty array
        }
    }

    componentDidUpdate(prevProps, prevState) {

        // Save options array to local storage if array changes
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            // First parameter is key for recovery
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions () {
        // Implicitly return object
        this.setState(() => ({options: []}));
    }

    handleDeleteOption (optionToRemove) {
        this.setState((prevState) => ({
            // If optionToRemove does not equal an option in the array it is retained
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick () {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption (option) {

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((previousState) => ({options: previousState.options.concat([option])}));
    }


    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
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
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle ? <h2>{props.subtitle}</h2> : null}
        </div>
    );
};

// Default prop values
Header.defaultProps = {
    title: 'Indecision'
};


// class Header extends React.Component {
//     // Must be defined for react components
//     render () {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <div>
                <button
                    onClick={props.handlePick}
                    // Check if options exist, if they don't disable button
                    disabled={!props.hasOptions}
                >What should I do?</button>
            </div>
        </div>
    );
};


// class Action extends React.Component {
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <button
//                         onClick={this.props.handlePick}
//                         // Check if options exist, if they don't disable button
//                         disabled={!this.props.hasOptions}
//                     >What should I do?</button>
//                 </div>
//
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            {/*Call props method from IndecisionApp component*/}
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 ? <p>Please add an option to get started</p> : null}
            {/*key needed for iterators; in this case just assign option name as key*/}
            {props.options.map((o) => (
                <Option
                    key={o}
                    optionText={o}
                    handleDeleteOption={props.handleDeleteOption}
                />
                )
            )}
        </div>
    );
};


// class Options extends React.Component {
//
//     render() {
//         return (
//             <div>
//                 {/*Call props method from IndecisionApp component*/}
//                 <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//                 {this.props.options.map((o) => <Option key={o} optionText={o}/>
//                 )}
//             </div>
//         );
//     }
// }

// TODO: Convert

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >Remove</button>
        </div>
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>{this.props.optionText}</div>
//         );
//     }
// }

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    // Retain this method so we can process form here
    handleAddOption (event) {

        event.preventDefault();

        // Trim string to avoid spaces being read as input
        const option = event.target.elements.option.value.trim();
        // This is confusing naming convention; this is the method passed from the parent
        // Parent method only returns value if error
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        // Wipes input after submission
        if (!error) {
            event.target.elements.option.value = '';
        }



    }

    render() {
        return (
            <div>
                {this.state.error ? <p>{this.state.error}</p> : null}
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

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));