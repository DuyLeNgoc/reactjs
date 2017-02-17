import React from 'react'
import AppBar from 'material-ui/AppBar';
import Home from "./home";

var styles = {
  container: {
    backgroundColor: "white",
  }
}

class App extends React.Component {
  render() {
    return (
    <div style={styles.container}>
    <AppBar title="Practice ReactJS" showMenuIconButton={false} />
    <br />
    {this.props.children || <Home />}
    </div>);
  }

}

export default App;
