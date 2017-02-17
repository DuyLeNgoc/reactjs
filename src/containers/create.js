import React from 'react';
import ConfirmDialog from '../components/confirmDialog';
import { addTask } from '../taskManager';

var styles = {
  container: {
    textAlign: "center",
    // backgroundColor: "#ffde00",
  }
}

class Create extends React.Component {

	constructor() {
		super();

    this.state = {
      isShowDialog: false,
      name: '',
      description: '',
      effort: 0
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
		this.handlAddTask = this.handlAddTask.bind(this);
		this.handleCancelTask = this.handleCancelTask.bind(this);
    this.handleChangeEffort = this.handleChangeEffort.bind(this);
	}

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }

  handleChangeEffort(event) {
    this.setState({effort: event.target.value});
  }

	handlAddTask() {
		addTask(this.state.name, this.state.description);
		this.props.router.goBack();
	}

	handleCancelTask() {
		this.props.router.goBack();
	}

	render() {
		return (
      <div style={styles.container}>
        <br/>
        <h1>Create New Task</h1>
        <span>Task Name: </span>
        <br />
        <input value={this.state.name} onChange={this.handleChangeName} />
        <br />
        <br />
        <span>Task Description: </span>
        <br />
        <input value={this.state.description} onChange={this.handleChangeDescription} />
        <br />
        <br />
        <span>Task Effort: </span>
        <br />
        <input value={this.state.effort} onChange={this.handleChangeEffort} />
        <br />
        <br />
        <button onClick={this.handlAddTask} name='Add'> Add </button>
        <ConfirmDialog confirmAction={this.handleCancelTask} />
      </div>
		);
	}
}

export default Create;
