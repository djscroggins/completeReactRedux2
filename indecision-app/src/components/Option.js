import React from 'react';

// Implicit return
const Option =  (props) => (
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            <button
                className="button button--link"
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >Remove
            </button>
        </div>
    );

export default Option;
// Can't export by default in-line because not class definition

// Explicit return

// const Option =  (props) => {
//     return (
//         <div>
//             {props.optionText}
//             <button
//                 onClick={(e) => {
//                     props.handleDeleteOption(props.optionText)
//                 }}
//             >Remove
//             </button>
//         </div>
//     );
// };