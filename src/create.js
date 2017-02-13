import React from 'react';
import ConfirmDialog from './confirmDialog';
import { addTask } from './taskManager';

class Create extends React.Component {

	constructor() {
		super();

    this.state = {
      isShowDialog: false,
      name: '',
      description: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
		this.handlAddTask = this.handlAddTask.bind(this);
		this.handleCancelTask = this.handleCancelTask.bind(this);
	}

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }

	handlAddTask() {
		addTask(this.state.name, this.state.description);
		this.props.router.goBack();
	}

	handleCancelTask() {
    // this.setState({isShowDialog: true});
		this.props.router.goBack();
	}

	render() {
		return (
      <div>
      { this.state.isShowDialog ? <ConfirmDialog /> :
        <div>
          <span>Task Name: </span>
          <input value={this.state.name} onChange={this.handleChangeName} />
          <br />
          <span>Task Description: </span>
          <input value={this.state.description} onChange={this.handleChangeDescription} />
          <br />
          <br />
          <button onClick={this.handlAddTask} name='Add'>Add</button>
          <button onClick={this.handleCancelTask} name='Cancel'>Cancel</button>
        </div>}
      </div>
		);
	}
}

export default Create;
