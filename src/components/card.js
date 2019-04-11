import React, {Component} from 'react';
import Bag from '../img/shopping-bag.svg';
import Star from '../img/star.svg';
import ReactSVG from 'react-svg';

class Card extends Component {
  render() {
    return (
      <div className="book-card">
        <div className="card-img">
          <img src="http://placehold.it/500" alt="card title" />
        </div>
        <div className="card-content">
          <div className="book-info">
            <div className="book-title">
              <h2>this is the book title</h2>
            </div>
            <div className="book-ahthor">
              <p>
                Written By <span>Yassine Mellouki</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card-btns">
          <div className="icons-row">
            <div className="favorite-btn">
              <div className="btn fav-img">
                <ReactSVG src={Star} />
              </div>
            </div>
            <div className="bags-btn">
              <div className="btn bag-img">
                <ReactSVG src={Bag} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
