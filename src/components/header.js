import React, {Component} from 'react';
import Logo from '../img/Logo.svg';
import Bag from '../img/shopping-bag.svg';
import Star from '../img/star.svg';
import ReactSVG from 'react-svg';

class Header extends Component {
  state = {
    favorite: [this.props.toFav],
		favs_length: 0,
  };


	/*
  componentWillMount() {
    this.setState({
      favorite: JSON.parse(window.localStorage.getItem('favorite')),
			favs_length: JSON.parse(window.localStorage.getItem('favorite')).length
    });
  }

  componentDidMount() {
    window.localStorage.setItem(
      'favorite',
      JSON.stringify(this.state.favorite),
    );
		console.log(this.state.favorite)
		console.log(this.state.favs_length)
  }
	*/

  render() {
    return (
      <header>
        <div className="logo">
          <div className="logo-img">
            <ReactSVG
              src={Logo}
              onInjected={(error, svg) => {
                // Keyboad Animation
                var pres_keys = document.querySelectorAll('#pressed_keys path');
                setInterval(function() {
                  var randomkey = Math.floor(Math.random() * 22),
                    i;
                  for (i = 0; i < pres_keys.length; i++) {
                    pres_keys[i].classList.remove('pressed_key');
                  }
                  pres_keys[randomkey].classList.add('pressed_key');
                }, 200);
              }}
            />
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
