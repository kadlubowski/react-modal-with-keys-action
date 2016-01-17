'use strict';

var _temporalUndefined = {};
var Modal = _temporalUndefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + ' is not defined - temporal dead zone'); } return true; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reactPureRenderComponent = require('react-pure-render/component');

var _reactPureRenderComponent2 = _interopRequireDefault(_reactPureRenderComponent);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../assets/modal.styl');

Modal = (function (_Component) {
  _inherits(_temporalAssertDefined(Modal, 'Modal', _temporalUndefined) && Modal, _Component);

  function Modal() {
    _classCallCheck(this, _temporalAssertDefined(Modal, 'Modal', _temporalUndefined) && Modal);

    _Component.call(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  (_temporalAssertDefined(Modal, 'Modal', _temporalUndefined) && Modal).prototype.closeModal = function closeModal(e) {
    var closeModalAction = this.props.closeModalAction;

    if (e.target.className === 'modal-wrapper' || e.target.className === 'close' || e.target.className === 'x' || e.target.className === 'modal-background active') {
      (_temporalAssertDefined(closeModalAction, 'closeModalAction', _temporalUndefined) && closeModalAction)();
    }
  };

  (_temporalAssertDefined(Modal, 'Modal', _temporalUndefined) && Modal).prototype.handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 13 && this.props.enterAction) {
      e.preventDefault();
      this.props.enterAction();
    } else if (e.keyCode === 27 && this.props.closeModalAction) {
      e.preventDefault();
      this.props.closeModalAction();
    } else if (e.keyCode === 127 && this.props.deleteAction) {
      e.preventDefault();
      this.props.deleteAction();
    }
  };

  (_temporalAssertDefined(Modal, 'Modal', _temporalUndefined) && Modal).prototype.componentDidMount = function componentDidMount() {
    var handleKeyDownEvent = this.props.handleKeyDownEvent;

    if (_temporalAssertDefined(handleKeyDownEvent, 'handleKeyDownEvent', _temporalUndefined) && handleKeyDownEvent) {
      window.addEventListener("keydown", this.handleKeyDown);
    }
  };

  (_temporalAssertDefined(Modal, 'Modal', _temporalUndefined) && Modal).prototype.componentWillUnmount = function componentWillUnmount() {
    var handleKeyDownEvent = this.props.handleKeyDownEvent;

    if (_temporalAssertDefined(handleKeyDownEvent, 'handleKeyDownEvent', _temporalUndefined) && handleKeyDownEvent) {
      window.removeEventListener("keydown", this.handleKeyDown);
    }
  };

  (_temporalAssertDefined(Modal, 'Modal', _temporalUndefined) && Modal).prototype.render = function render() {

    return _react2['default'].createElement(
      'div',
      { className: 'modal-background active', onClick: this.closeModal.bind(this) },
      _react2['default'].createElement(
        'div',
        { className: 'modal-wrapper' },
        _react2['default'].createElement(
          'div',
          { className: 'modal' },
          _react2['default'].createElement(
            'div',
            { className: 'close' },
            _react2['default'].createElement('div', { className: 'x' }),
            _react2['default'].createElement('div', { className: 'x' })
          ),
          this.props.children
        )
      )
    );
  };

  return _temporalAssertDefined(Modal, 'Modal', _temporalUndefined) && Modal;
})(_reactPureRenderComponent2['default']);

module.exports = _temporalAssertDefined(Modal, 'Modal', _temporalUndefined) && Modal;