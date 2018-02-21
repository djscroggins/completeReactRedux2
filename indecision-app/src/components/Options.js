import React from 'react';
import Option from './Option';


//Implicit return
const Options = (props) => (
        <div>
            {/*Call props method from IndecisionApp component*/}
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}>Remove all
            </button>
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


export default Options;


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

// Explicit return

// const Options = (props) => {
//     return (
//         <div>
//             {/*Call props method from IndecisionApp component*/}
//             <button onClick={props.handleDeleteOptions}>Remove all</button>
//             {props.options.length === 0 ? <p>Please add an option to get started</p> : null}
//             {/*key needed for iterators; in this case just assign option name as key*/}
//             {props.options.map((o) => (
//                     <Option
//                         key={o}
//                         optionText={o}
//                         handleDeleteOption={props.handleDeleteOption}
//                     />
//                 )
//             )}
//         </div>
//     );
// };
