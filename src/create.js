import React from 'react';

import { addTask } from './taskManager';

class Create extends React.Component {

	constructor() {
		super();

		this.handlAddTask = this.handlAddTask.bind(this);
		this.handleCancelTask = this.handleCancelTask.bind(this);
	}

	handlAddTask() {
		addTask('Luan Nguyen +1');
		this.props.router.goBack();
	}

	handleCancelTask() {
		this.props.router.goBack();
	}

	render() {
		return (
			<div>
				<span>Task Name</span>
        <input placeholder='Input Task Name' />
        <span>Task Description</span>
        <input placeholder='Input Task Description' />
				<table>
					<tbody>
						<tr>
							<td><input type='button' onClick={this.handleCancelTask} name='Cancel' /></td>
							<td><input type='button' onClick={this.handlAddTask} name='Add' /></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

Create.propTypes = {
	router: React.PropTypes.element
};

export default Create;
