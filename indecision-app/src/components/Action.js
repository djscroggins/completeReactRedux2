import React from 'react';

const Action = (props) => {
    return (
        <div>
            <div>
                <button
                    onClick={props.handlePick}
                    // Check if options exist, if they don't disable button
                    disabled={!props.hasOptions}
                >What should I do?
                </button>
            </div>
        </div>
    );
};

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