// TRANSLATING BELOW COUNTER APP TO USE COMPONENT STATE

class Counter extends React.Component {

    constructor(props) {
        super(props);
        // Bind methods to this context
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // Set up default state
        this.state = {
            count: 0
        };
    }

    componentDidMount () {

        const count = parseInt(localStorage.getItem('count'), 10);

        if (!isNaN(count)) {
            this.setState(() => ({count}));
        }

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }

    handleAddOne () {
        // By default setState() gives access to the previous state
        this.setState((previousState) => {
            return {
              count: previousState.count + 1
            };
        });
    }

    handleMinusOne () {
       this.setState((previousState) => {
           return {
             count: previousState.count - 1
           };
       });
    }

    handleReset () {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                {/*Render current object state*/}
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={365}/>, document.getElementById('app'));


// let count = 0;
//
// const addOne = () => {
//     count++;
//     // Update template display
//     renderCounterApp();
// };
//
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
//
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
//
// const appRoot = document.getElementById('app');
//
// // Note: This will be accomplished later using components; pedagogical
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             {/*Note: className needed because class is a reserved word in JS*/}
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//
//     ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();



