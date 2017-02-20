import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class CreateForm extends React.Component {

  render() {
    const { handleSubmit, reset} = this.props;

    return (
        <form onSubmit={handleSubmit(values => handleSubmit(values))}>
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
            <button type="button" onClick={reset}>Clear</button>
          </div>
        </form>
    );
  }
}

export default reduxForm({
  form: 'CreateForm'  // a unique identifier for this form
})(CreateForm)
