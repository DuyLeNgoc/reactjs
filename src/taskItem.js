import React from 'react';
import {render} from 'react-dom';

var styles = {
  name: {
    color: "blue"
  }
}

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowDetailTask = this.handleShowDetailTask.bind(this);
  }

  render() {
    return (
      <tr>
        <td>
        <button style={styles.name} onClick={this.handleShowDetailTask}>
        {this.props.task.name}
        </button>
        </td>
      </tr>
    );
  }

  handleShowDetailTask() {
    //process navigate to create task
    this.props.router.push('/task/detail/' + this.props.task.TASK_ID);
  }
}


export default TaskItem;
