import React from 'react';
import CreateForm from "containers/createForm";
import { addTask } from '../taskManager';

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
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleOpen() {
    this.setState({open: true});
  }
  
  handleClose() {
    this.setState({open: false});
  }
  
  handleSubmit(values) {
    // Do something with the form values
    console.log("aaaaaaaaa");
    console.log(values);
    console.log("abbbbbbb");
  }

	render() {
		return (
      <CreateForm 
      onSubmit={this.handleSubmit} />
		);
	}
}

export default Create;
