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
    return 
    (
      <div>
        <span style={styles.name}>
        {this.props.task.name}
        </span>;
        <span style={styles.des}>
        {this.props.task.description}
        </span>;
      </div>
    );
  }
}

export default Detail;
