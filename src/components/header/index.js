import React, {Component} from 'react';
import Logo from '../../img/Logo.svg';
import Bag from '../../img/shopping-bag.svg';
import Star from '../../img/star.svg';
import ReactSVG from 'react-svg';
import {connect} from 'react-redux';
import FavNotify from './notify/FavNotify';

class Header extends Component {
  state = {
		renderFav: 0,
    favorite: [this.props.toFav],
		favs_length: 0,
  };

	componentDidUpdate(){
		//toggle favorite button
      let fav_icon = document.getElementById("header-fav"),
        fav_bg = fav_icon.querySelector('svg .bg'),
        text = fav_icon.getElementsByTagName('text')[0],
				favorite_length = this.props.state.books.favorite.length;
		console.log(favorite_length)
		if(this.props.state.books.favorite.length > 0){
        fav_bg.style.fill = 'red';
        text.innerHTML = favorite_length;
			if(favorite_length > 9){
					text.setAttribute('transform', 'matrix(1.19 0 0 1 120 340)');
			}else{
				text.setAttribute('transform', 'matrix(1.19 0 0 1 190.1 317.1)');
			}
      } else {
       fav_bg.style.fill = 'none';
        text.innerHTML ="";
      }

		//toggle bag button
      let bag_icon = document.getElementById("header-bag"),
        bag_bg = bag_icon.querySelector('svg .bg'),
        text_count = bag_icon.getElementsByTagName('text')[0],
				bag_length = this.props.state.books.bag.length;
		if(this.props.state.books.bag.length > 0){
        bag_bg.style.fill = 'red';
				let total_bag_counts = 0;
			this.props.state.books.bag.forEach(function(bg){
				total_bag_counts += bg.count
				text_count.setAttribute('transform', 'matrix(1.19 0 0 1 135 366.5)');
			})
        text_count.innerHTML = total_bag_counts;
			if(total_bag_counts > 9){
					text_count.setAttribute('transform', 'matrix(1.19 0 0 1 80 366.5)');
			}
      } else {
       bag_bg.style.fill = 'none';
      }
	}



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
              <div className="btn fav-img" id="header-fav">
                <ReactSVG src={Star} />
								<FavNotify/>	
              </div>
            </div>
            <div className="bags-btn">
              <div className="btn bag-img" id="header-bag">
                <ReactSVG src={Bag} />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}


function mapStateToProps(state){
	return {state}
}

export default connect(mapStateToProps)(Header);
