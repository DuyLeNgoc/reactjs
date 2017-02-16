import React from 'react'
import Home from "./home";

var styles = {
  container: {
    backgroundColor: "#ffde00",
  }
}

class App extends React.Component {
  render() {
    return (
    <div style={styles.container}>
    <h1>Practice 2</h1>
    <br />
    {this.props.children || <Home />}
    </div>);
  }

}

export default App;
