import React from 'react';
import {render} from 'react-dom';
import { Link } from "react-router";

var styles = {
  name: {
    color: "blue"
  }
}

class TaskItem extends React.Component {
  render() {
    var taskID = '/task/detail/' + this.props.task.taskID;
    return (
      <tr>
        <td>
          <Link to={taskID}>{this.props.task.name}</Link>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
