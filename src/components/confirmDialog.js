import React from 'react';
import {render} from 'react-dom';
import Confirm from 'react-confirm-bootstrap';

class ConfirmDialog extends React.Component {
  onConfirm() {
    console.log('Confirm action');
    this.props.confirmAction();
  }

  render() {
        return (
          <Confirm
                    onConfirm={this.onConfirm.bind(this)}
                    body="Are you want to leave?"
                    confirmText="OK"
                    title="">
                    <button>Cancel</button>
          </Confirm>
        );
    }
}

ConfirmDialog.propTypes = {
  confirmAction: React.PropTypes.func
}

export default ConfirmDialog;
