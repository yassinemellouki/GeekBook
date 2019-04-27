import React, {Component} from 'react';

class Closebtn extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="close-btn">
				<button>X</button>
      </div>
    );
  }
}

export default Closebtn;
