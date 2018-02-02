// TRANSLATE VISIBILITY TOGGLE TO USE COMPONENT STATE

class Visible extends React.Component {

    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleVisibility () {
        this.setState((previousState) => {
            return {
                visibility: !previousState.visibility
            };
        });
    }

    render () {
        const title = 'Visibility Toggle';
        const details = 'Here are the hidden details';

        return (
          <div>
              <h1>{title}</h1>
              <button onClick={this.handleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
              {!this.state.visibility ? null : <p>{details}</p>}
          </div>
        );

    }
}

ReactDOM.render(<Visible />, document.getElementById('app'));



// console.log('build-it-visible.js is running!');
//
// const app = {
//     title: 'Visibility Toggle',
//     visibilityState: false,
//     details: 'Here are the hidden details.'
// };
//
// const changeVisibilityState = () => {
//     app.visibilityState = !app.visibilityState;
//     renderTemplate();
// };
//
// const renderTemplate = () => {
//   const template = (
//       <div>
//           <h1>{app.title}</h1>
//           <button onClick={changeVisibilityState}>{app.visibilityState ? 'Hide details' : 'Show details'}</button>
//           {!app.visibilityState ? null : <p>{app.details}</p>}
//       </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// };
//
// const appRoot = document.getElementById('app');
//
// renderTemplate();

