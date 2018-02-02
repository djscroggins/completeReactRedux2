'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TRANSLATE VISIBILITY TOGGLE TO USE COMPONENT STATE

var Visible = function (_React$Component) {
    _inherits(Visible, _React$Component);

    function Visible(props) {
        _classCallCheck(this, Visible);

        var _this = _possibleConstructorReturn(this, (Visible.__proto__ || Object.getPrototypeOf(Visible)).call(this, props));

        _this.handleVisibility = _this.handleVisibility.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(Visible, [{
        key: 'handleVisibility',
        value: function handleVisibility() {
            this.setState(function (previousState) {
                return {
                    visibility: !previousState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Visibility Toggle';
            var details = 'Here are the hidden details';

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    title
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleVisibility },
                    this.state.visibility ? 'Hide details' : 'Show details'
                ),
                !this.state.visibility ? null : React.createElement(
                    'p',
                    null,
                    details
                )
            );
        }
    }]);

    return Visible;
}(React.Component);

ReactDOM.render(React.createElement(Visible, null), document.getElementById('app'));

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
