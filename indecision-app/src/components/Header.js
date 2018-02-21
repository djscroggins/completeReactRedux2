import React from 'react';


// Implicit return

const Header = (props) => (
        <div className="header">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle ? <h2 className="header__subtitle">{props.subtitle}</h2> : null}
        </div>
    );

// Default prop values
Header.defaultProps = {
    title: 'Indecision'
};

export default Header;


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

// Explicit return

// const Header = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             {props.subtitle ? <h2>{props.subtitle}</h2> : null}
//         </div>
//     );
// };