# react-modal-with-keys-action
React modal component with keydown event Listener.

###Installation
```
npm install react-modal-with-keys-action --save
```

###Usage
```javascript
import React from 'react';
import Component from 'react-pure-render/component';
import Modal from 'react-modal-with-keys-action';

export default class ModalDemo extends Component {
    constructor(){
        super();
        this.openModalAction = this.openModalAction.bind(this);
        this.closeModalAction = this.closeModalAction.bind(this);
        this.enterAction = this.enterAction.bind(this);
        this.deleteAction = this.deleteAction.bind(this);
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
    
    enterAction(){
        console.log("enter pressed");
        // do something
    }
    
    deleteAction(){
        console.log("delete pressed");
        // do something
    }
    
    
    render(){
        const {isModalVisible} = this.state;
        return(
            <div>
                <button onClick={this.openModalAction}>Open modal</button>
                {isModalVisible&&
                <Modal closeModalAction={this.closeModalAction} enterAction={this.enterAction} deleteAction={this.deleteAction} handleKeyDownEvent={true}>
                    <div>
                        <p>Press esc to close modal, press enter to perform enterAction, press delete to perform deleteAction</p>
                    </div>
                </Modal>}
            </div>
        )
    }
}
```