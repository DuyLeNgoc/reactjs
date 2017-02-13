import React from 'react'
import Home from "./home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateTask = this.handleCreateTask.bind(this);
  }

  render() {
    return (<div>
        <button onClick={this.handleCreateTask}>Create Task</button>
        {this.props.children || <Home />}
      </div>);
  }

  handleCreateTask(e) {
    //process navigate to create task
    console.log('handleCreateTask');
    
  }
}

export default App;
