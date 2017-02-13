import React from 'react';
import {render} from 'react-dom';

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
    console.log(this.props);
    return null;
  }
}

export default Detail;
