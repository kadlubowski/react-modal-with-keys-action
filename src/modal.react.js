import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import '../assets/modal.styl';

export default class Modal extends Component {

  static propTypes = {
    closeModalAction:PropTypes.func.isRequired,
    modalKeysActions: PropTypes.array,
    handleKeyDownEvent: PropTypes.bool,
  };

  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e){
    const {closeModalAction} = this.props;
    if(e.target.className === 'react-modal-with-keys-action-wrapper' || e.target.className === 'react-modal-with-keys-action-close' || e.target.className === 'react-modal-with-keys-action-x' || e.target.className === 'react-modal-with-keys-action-background active') {
      closeModalAction();
    }
  }

  handleKeyDown(e){
    const {modalKeysActions} = this.props;
    modalKeysActions.forEach(function(item, index){
      if(item.key===e.keyCode){
        if(item.multiKeys){
          const altPressed = e.getModifierState('Alt');
          const controlPressed = e.getModifierState('Control');
          const shiftPressed = e.getModifierState('Shift');

          item.actions.forEach(function(multiActionsItem, multiActionsIndex){
            let alt = false;
            let control = false;
            let shift = false;

            multiActionsItem.keys.forEach(function(key, keyIndex){
              if(key==='Alt'){
                alt = true;
              } else if(key==='Control'){
                control = true;
              } else if(key==='Shift'){
                shift = true;
              }
            })

            if(alt===altPressed&&control===controlPressed&&shift===shiftPressed){
              multiActionsItem.action()
            }
          })
        } else {
          item.action()
        }
      }
    })
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
      <div className='react-modal-with-keys-action-background active' onClick={this.closeModal}>
        <div className="react-modal-with-keys-action-wrapper">
          <div className="react-modal-with-keys-action">
            <div className="react-modal-with-keys-action-close">
              <div className="react-modal-with-keys-action-x"></div>
              <div className='react-modal-with-keys-action-x'></div>
            </div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
