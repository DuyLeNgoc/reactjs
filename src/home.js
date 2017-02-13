import React from 'react';
import {render} from 'react-dom';
import TaskItem from "./TaskItem";
import LISTITEMS from "./taskManager";
import { Link } from "react-router";

var styles = {
  table: {
    border: 3,
    bordercolor: "red"
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateTask = this.handleCreateTask.bind(this);
  }
  
  render() {
    var rows = [];
    LISTITEMS.forEach((task, id) => {
      rows.push(<TaskItem task={task} key={id} {...this.props} />);
    });
    return (
      <div>
        <button onClick={this.handleCreateTask}>Create Task</button>
        <br />
        <span>
          List Task
        </span>
      {
        <table style={styles.table}>
          <tbody>{rows}</tbody>
        </table>
      }
      </div>
    );
  }

  handleCreateTask(e) {
    //process navigate to create task
    this.props.router.push('/task/create');
  }
}

export default Home;
