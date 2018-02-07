import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {

    // Using experimental class properties; no constructor; class methods are arrow functions that bind
    // in scope (I actually really don't like this. There is a reason you bind methods to objects.)
    state = {
        options: []
    };

    handleDeleteOptions = () => {
        // Implicitly return object
        this.setState(() => ({options: []}));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            // If optionToRemove does not equal an option in the array it is retained
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((previousState) => ({options: previousState.options.concat([option])}));
    };

    componentDidMount() {

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