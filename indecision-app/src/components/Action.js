import React from 'react';

//Implicit return
const Action = (props) => (
        <div>
            <div>
                <button
                    className="big-button"
                    onClick={props.handlePick}
                    // Check if options exist, if they don't disable button
                    disabled={!props.hasOptions}
                >What should I do?
                </button>
            </div>
        </div>
    );


export default Action;


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

// Explicit return

// const Action = (props) => {
//     return (
//         <div>
//             <div>
//                 <button
//                     onClick={props.handlePick}
//                     // Check if options exist, if they don't disable button
//                     disabled={!props.hasOptions}
//                 >What should I do?
//                 </button>
//             </div>
//         </div>
//     );
// };