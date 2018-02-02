// React enforces upper case class names to distinguish between components and html elements
// This example uses ES6 class syntax
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
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

    handleAddOption (option) {

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((previousState) => {
            return {
                // Use concat instead of push to avoid directly manipulating the state
                // rather just compute the new one
                options: previousState.options.concat([option])
            };
        });
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
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};


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
            {/*key needed for iterators; in this case just assign option name as key*/}
            {props.options.map((o) => <Option key={o} optionText={o}/>
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
        <div>{props.optionText}</div>
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

        this.setState(() => {
            return {
                error
            };
        });



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