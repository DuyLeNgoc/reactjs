import React from 'react';
import {render} from 'react-dom';
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
    this.props.dataSource.forEach((task, id) => {
      rows.push(<TaskItem task={task} key={id} {...this.props} />);
    });
    return (
      <div>
        <button onClick={this.handleCreateTask}>Create Task</button>
        <br />
        <br />
        <span>
          List of Tasks
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
