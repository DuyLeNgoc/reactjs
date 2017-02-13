import React from 'react';
import {render} from 'react-dom';
import Confirm from 'react-confirm-bootstrap';

class ConfirmDialog extends React.Component {
  onConfirm() {
    console.log('Confirm action');

  }

  render() {
        return (
            <Confirm
                onConfirm={this.onConfirm}
                body="Are you want to leave?"
                confirmText="Confirm"
                title="Confirmation"
                buttonText="testing"
                children={null}
                visible={true}>
            </Confirm>
        )
    }
}

export default ConfirmDialog;
