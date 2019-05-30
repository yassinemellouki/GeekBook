import React, {Component} from 'react';
import Cover from './cover';
import Details from './details';

class Card extends Component {
  render() {
    return (
      <div className="notify-card-section">
        <div className="book-card">
          <Cover img={this.props.bookInfos.cover} />
          <div className="card-content">
            <Details
              title={this.props.bookInfos.title}
              author={this.props.bookInfos.author}
              price={this.props.bookInfos.price}
              id={this.props.bookInfos.id}
              number={this.props.bookInfos.count}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
