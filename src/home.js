import React from 'react';
import {render} from 'react-dom';
import TaskItem from "./TaskItem";
import LISTITEMS from "./taskManager";

var styles = {
  table: {
    border: 3,
    bordercolor: "red"
  }
}

class Home extends React.Component {
  render() {
    var rows = [];
    LISTITEMS.forEach(function(task) {
      rows.push(<TaskItem task={task} key={task.name} />);
    });
    return (
      <div>
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
}

export default Home;
