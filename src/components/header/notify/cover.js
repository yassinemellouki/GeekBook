import React, {Component} from 'react';
import * as images from './imgs';

class Cover extends Component {
  render() {
    var img = this.props.img,
      path = images[img];
    if (!this.props.img.includes("://")) {
      return (
        <div className="card-img">
          <img src={path} alt="card title" />
        </div>
      );
		}else{
      return (
        <div className="card-img">
          <img src={this.props.img} alt="card title" />
        </div>
      );

		}
  }
}

export default Cover;
