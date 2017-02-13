import React from 'react'
import Home from "./home";

class App extends React.Component {
  render() {
    return (<div>
        {this.props.children || <Home />}
        </div>);
  }

}

export default App;
