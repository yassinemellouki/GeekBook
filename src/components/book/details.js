import React, {Component} from 'react';
import Price from './price';

class Details extends Component {
  render() {
    return (
      <div className="book-info">
        <div className="book-title">
          <h2>this is the book title</h2>
        </div>
        <div className="book-author">
          <p>
            Written By <span>Yassine Mellouki</span>
          </p>
        </div>
        <Price />
      </div>
    );
  }
}

export default Details;
