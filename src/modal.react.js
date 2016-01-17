const Component = require('react-pure-render/component');
const React = require('react');
require('./modal.styl');

export default class Modal extends Component {

  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  closeModal(e){
    const {closeModalAction} = this.props;
    if(e.target.className === 'modal-wrapper' || e.target.className === 'close' || e.target.className === 'x' || e.target.className === 'modal-background active') {
      closeModalAction();
    }
  }

  handleKeyDown(e){
    if(e.keyCode === 13 && this.props.enterAction){
      e.preventDefault();
      this.props.enterAction();
    } else if(e.keyCode === 27 && this.props.closeModalAction){
      e.preventDefault();
      this.props.closeModalAction();
    } else if(e.keyCode === 127 && this.props.deleteAction) {
      e.preventDefault();
      this.props.deleteAction();
    }
  }

  componentDidMount(){
    const {handleKeyDownEvent} = this.props;
    if(handleKeyDownEvent){
      window.addEventListener("keydown", this.handleKeyDown);
    }
  }

  componentWillUnmount(){
    const {handleKeyDownEvent} = this.props;
    if(handleKeyDownEvent){
      window.removeEventListener("keydown", this.handleKeyDown);
    }
  }

  render() {

    return (
      <div className='modal-background active' onClick={::this.closeModal}>
        <div className="modal-wrapper">
          <div className="modal">
            <div className="close">
              <div className="x"></div>
              <div className='x'></div>
            </div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
