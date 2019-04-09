import React, {Component} from 'react';
import Logo from '../img/Logo.svg';
import Bag from '../img/shopping-bag.svg';
import Star from '../img/star.svg';
import ReactSVG from 'react-svg';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <div className="logo-img">
            <ReactSVG src={Logo} />
          </div>
        </div>
        <div className="header-btns">
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
      </header>
    );
  }
}
export default Header;
