import React, {Component} from 'react';
import Cover from './book/cover';
import Details from './book/details';
import Btn from './book/btns';

class Card extends Component {
  render() {
    return (
      <div className="book-card">
				<Cover />
        <div className="card-content">
					<Details/>          
					<Btn/>
        </div>
      </div>
    );
  }
}

export default Card;
