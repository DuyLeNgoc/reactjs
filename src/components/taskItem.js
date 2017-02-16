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
    return (
      <tr>
        <td>
          <li><Link style={styles.name} to={`/task/detail/${this.props.task.taskID}`}>{this.props.task.name}</Link></li>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
