import React from 'react';
import {render} from 'react-dom';
import LISTITEMS from "../taskManager";

var styles = {
  focus: {
    color: "red"
  },
  normal: {
    color: "black"
  }
}

class Detail extends React.Component {

  render() {
    const { taskID } = this.props.routeParams;
    let task = LISTITEMS.find(x => x.taskID == taskID); // 130
    const date = new Date(task.created);
    var createdDate = date.toLocaleTimeString();

    return (
      <div>
          <span style={styles.normal}>Task Name: {task.name}</span>
          <br />
          <span style={styles.normal}>Task Description: {task.description}</span>
          <br />
          <span style={styles.normal}>Effort: {task.effort}</span>
          <br />
          <span style={styles.normal}>Date Created: {createdDate}</span>
          <br />
          <span style={task.complete ? styles.normal : styles.focus}>{task.complete ? "Completed" : "Not Completed" }</span>
      </div>
    );
  }
}

export default Detail;
