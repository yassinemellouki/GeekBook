import React, {Component} from 'react';
import Cover from './cover';
import Details from './details';
import Closebtn from './close_btn';

class Card extends Component {

  render() {
    return (
      <div className="notify-card-section">
        <Closebtn bookId={this.props.bookInfos.id} />
        <div className="book-card">
          <Cover img={this.props.bookInfos.cover} />
          <div className="card-content">
            <Details
              title={this.props.bookInfos.title}
              author={this.props.bookInfos.author}
              price={this.props.bookInfos.price}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
