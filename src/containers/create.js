import React from 'react';
import CreateForm from "containers/createForm";
import { addTask } from 'taskManager';

var styles = {
  container: {
    textAlign: "center"
  }
}

class Create extends React.Component {

	constructor(props) {
		super(props);

    this.state = {
      open: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleSubmit(values) {
    // Do something with the form values
    addTask(values.name, values.description, parseInt(values.effort));
		this.props.router.goBack();
  }

	render() {
		return (
      <CreateForm 
      onSubmit={this.handleSubmit} />
		);
	}
}

export default Create;
