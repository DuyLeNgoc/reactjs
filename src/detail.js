import React from 'react';
import {render} from 'react-dom';
import LISTITEMS from "./taskManager";

var styles = {
  name: {
    color: "blue"
  },
  des: {
    color: "black"
  }
}

class Detail extends React.Component {

  render() {
    const { taskID } = this.props.routeParams;
    let task = LISTITEMS.find(x => x.taskID == taskID); // 130

    return (
      <div>
        <span style={styles.name}>Task Name: {task.name}</span>
        <br />
        <span style={styles.des}>Task Description: {task.description}</span>
      </div>
    );
  }
}

export default Detail;
