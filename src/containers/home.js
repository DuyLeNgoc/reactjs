import React, { PropTypes } from 'react';
import {render} from 'react-dom';
import { connect } from "react-redux";

import TaskItem from "components/taskItem";
import LISTITEMS from "taskManager";
import {getTaskList} from 'redux/home';

var styles = {
  table: {
    border: 3,
    bordercolor: "red"
  }
}

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateTask = this.handleCreateTask.bind(this);
  }

  render() {
    var rows = [];
    let totalEffort = 0;
    // const items = this.props.dataSource;
    // if(items.length > 0) {
    //   totalEffort = items.reduce((task1, task2) => { const e1 = parseInt(task1.effort); const e2 = parseInt(task2.effort); return e1 + e2; });
    // }
    // console.log(totalEffort);
    this.props.dataSource.forEach((task, id) => {
      totalEffort += task.effort;
      rows.push(<TaskItem task={task} key={id} {...this.props} />);
    });
    return (
      <div>
        <button onClick={this.handleCreateTask}>Create Task</button>
        <br />
        <br />
        <span>
          sum of effort: {totalEffort}
        </span>
        <br />
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

  componentDidMount() {
    this.props.getTaskList();
  }

}

Home.propTypes = {
  getTaskList: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
  dataSource: PropTypes.array
};

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    error: state.taskListReducer.error,
    loading: state.taskListReducer.loading,
    dataSource: state.taskListReducer.dataSource
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

export default connect(state => (mapStateToProps),
  {
    getTaskList
  })(Home);
