import React, {Component} from 'react';
import Price from './price';
import Closebtn from './close_btn';

class Details extends Component {
  render() {
    return (
      <div className="book-info">
        <div className="book-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="book-author">
          <p>
            Written By <span>{this.props.author}</span>
          </p>
        </div>
        <Price price={this.props.price} />
				<Closebtn bookId={this.props.id} />
      </div>
    );
  }
}

export default Details;
