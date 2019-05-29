import React, {Component} from 'react';
import Price from './price';
import Closebtn from './close_btn';
import CloseBagbtn from './close_btn_bag';
import Numbers from './numbers';

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
				<Numbers number ={this.props}  />
				<CloseBagbtn bookId={this.props.id} />
      </div>
    );
  }
}

export default Details;
