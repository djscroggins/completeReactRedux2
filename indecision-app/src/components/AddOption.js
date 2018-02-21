import React from 'react';

export default class AddOption extends React.Component {

    // Using experimental class properties
    state = {
        error: undefined
    };

    // Retain this method so we can process form here

    handleAddOption = (event) => {

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
    };

    render() {
        return (
            <div>
                {this.state.error ? <p>{this.state.error}</p> : null}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}