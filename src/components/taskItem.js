import React from 'react';
import {render} from 'react-dom';
import { Link } from "react-router";

var styles = {
  completed: {
    color: "blue"
  },
  notCompleted: {
    color: "red"
  }
}

class TaskItem extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <li><Link style={this.props.task.complete ? styles.completed : styles.notCompleted} to={`/task/detail/${this.props.task.taskID}`}>{this.props.task.name}</Link></li>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
