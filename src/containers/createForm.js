import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class CreateForm extends React.Component {
  // handleSubmit(values) {
  //   // Do something with the form values
  //   this.props.handleSubmit(values);
  // }

  render() {
    console.log(this.props);
      // const { handleSubmit, handleCancel, handleClose } = this.props;
      /*const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={handleClose}
        />,
        <FlatButton
          label="OK"
          primary={true}
          keyboardFocused={true}
          onTouchTap={handleClose}
        />,
      ];*/
    return (
      // <div>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label>Task Name</label>
            <div>
              <Field name="taskName" component="input" type="text" placeholder="Name"/>
            </div>
          </div>
          <div>
            <label>Task Description</label>
            <div>
              <Field name="taskDescription" component="input" type="text" placeholder="Description"/>
            </div>
          </div>
          <div>
            <label>Effort</label>
            <div>
              <Field name="effort" component="input" type="text" placeholder="Effort"/>
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
            {/*<RaisedButton label="Submit" onTouchTap={handleSubmit} />*/}
            {/*<RaisedButton label="Cancel" onTouchTap={handleCancel} />*/}
          </div>
        </form>
        /*{<Dialog
            title="Confirmation"
            actions={actions}
            modal={false}
            open={this.props.open}
            onRequestClose={handleClose}
          >
          "Are you sure to leave?"
          </Dialog>}*/
      // </div>
    );
  }
}

export default reduxForm({
  form: 'createForm'  // a unique identifier for this form
})(CreateForm)
