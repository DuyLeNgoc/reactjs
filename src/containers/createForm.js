import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )

class CreateForm extends React.Component {

  render() {
    const { handleSubmit, reset} = this.props;

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Task Name</label>
            <div>
              <Field name="name" component={renderTextField} type="text" placeholder="Name"/>
            </div>
          </div>
          <div>
            <label>Task Description</label>
            <div>
              <Field name="description" component={renderTextField} type="text" placeholder="Description"/>
            </div>
          </div>
          <div>
            <label>Effort</label>
            <div>
              <Field name="effort" component={renderTextField} type="text" placeholder="Effort"/>
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
