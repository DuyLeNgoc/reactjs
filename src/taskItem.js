import React from 'react';
import {render} from 'react-dom';

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
        <button style={styles.name}>
        {this.props.task.name}
        </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
