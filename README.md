# react-modal-with-keys-action
React modal component with keydown event Listener.

## Installation
```
npm install react-modal-with-keys-action --save
```

## Usage

### Props

#### closeModalAction
- required
- function

This action is performed when user clicks anywere beyond modal window.

#### handleKeyDownEvent
- optional
- boolean

Set ```true``` to enable modalKeysActions. If set ```false``` or not set, modalKeysActions are disabled.

#### modalKeysActions
- optional
- array of objects. Object props are:
    - key
        - reqiured
        - number (key code)
    - action
        - required only when multiKeys is not set ```true```
        - function (performed on key press)
    - multiKeys
        - optional
        - boolean (Set ```true``` if want perform action when multiple keys are pressed)
    - actions
        - required only when multiKeys is set ```true```
        - array of objects. Object props are:
            - keys
                - required
                - array of strings (Supported values are ```'Alt'```, ```'Control'``` and ```'Shift'```)
            - action
                - required
                - function (performed when all keys are pressed)

Example of modalKeysActions prop:

```javascript
    const modalKeysActions = [{
      key:13,
      multiKeys:true,
      actions:[{
        keys:['Alt','Control', 'Shift'],
        action:this.acs
      },{
        keys:['Alt','Control'],
        action:this.ac
      },{
        keys:['Alt'],
        action:this.a
      },{
        keys:[],
        action:this.noMulti
      }]
    },{
      key:27,
      action:this.closeModalAction
    }]
```

### Style

You can use your own style sheet. Good way to start is to use this [css](./assets/modal.css) or [stylus](./assets/modal.styl) file.


### Example

```javascript
import React from 'react';
import Component from 'react-pure-render/component';
import Modal from 'react-modal-with-keys-action';
import './modal.styl';

export default class ModalDemo extends Component {

  constructor(){
    super();
    this.openModalAction = this.openModalAction.bind(this);
    this.closeModalAction = this.closeModalAction.bind(this);
    this.state = {
      isModalVisible: false
    }
  }

  openModalAction(){
    this.setState({
      isModalVisible: true
    })
  }

  closeModalAction(){
    this.setState({
      isModalVisible: false
    })
  }

  acs(){
    console.log('Key pressed: Enter + Alt + Control + Shift');
  }
  ac(){
    console.log('Key pressed: Enter + Alt + Control');
  }
  a(){
    console.log('Key pressed: Enter + Alt');
  }
  noMulti(){
    console.log('Key pressed: Enter');
  }

  render(){
    const {isModalVisible} = this.state;
    const ENTER_KEY = 13;
    const modalKeysActions = [{
      key:ENTER_KEY,
      multiKeys:true,
      actions:[{
        keys:['Alt','Control', 'Shift'],
        action:this.acs
      },{
        keys:['Alt','Control'],
        action:this.ac
      },{
        keys:['Alt'],
        action:this.a
      },{
        keys:[],
        action:this.noMulti
      }]
    },{
      key:27,
      multiKeys:false,
      action:this.closeModalAction
    }]
    return(
      <div>
        <button onClick={this.openModalAction}>Open modal</button>
        {isModalVisible&&
        <Modal closeModalAction={this.closeModalAction} modalKeysActions={modalKeysActions} handleKeyDownEvent={true}>
          <div>
            <p>Press esc to close modal, press enter to perform enterAction</p>
          </div>
        </Modal>}
      </div>
    )
  }
}
```
