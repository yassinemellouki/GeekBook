import React, {Component} from 'react';
import Bag from '../../img/shopping-bag.svg';
import Star from '../../img/star.svg';
import ReactSVG from 'react-svg';

class Btn extends Component {
  render() {
    return (
      <div className="card-btns">
        <div className="icons-row">
          <div className="bags-btn">
            <div className="btn bag-img">
              <ReactSVG src={Bag} />
            </div>
          </div>
          <div className="favorite-btn">
            <div className="btn fav-img">
              <ReactSVG src={Star} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Btn;
