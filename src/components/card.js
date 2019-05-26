import React, {Component} from 'react';
import Cover from './book/cover';
import Details from './book/details';
import Btn from './book/btns';
import Closebtn from './book/close_btn';

class Card extends Component {

  render() {
    return (
      <div className="card-section">
        <Closebtn bookId={this.props.bookInfos.id} />
        <div className="book-card">
          <Cover img={this.props.bookInfos.cover} />
          <div className="card-content">
            <Details
              title={this.props.bookInfos.title}
              author={this.props.bookInfos.author}
              price={this.props.bookInfos.price}
            />
            <Btn bookId={this.props.bookInfos.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
