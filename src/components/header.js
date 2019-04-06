import React, {Component} from 'react';
import Logo from "../img/Logo.svg";
import ReactSVG from 'react-svg'


class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <div className="logo-img">
				<ReactSVG src={Logo}/>
			{/*<object height="150" type="image/svg+xml" data={Logo}></object>*/}
          </div>
        </div>
        <div className="header-btns">
          <div className="favorite-btn">
						<div className="fav-img">
						</div>
					</div>
          <div className="bags-btn" >
					</div>
        </div>
      </header>
    );
  }
}
export default Header;
