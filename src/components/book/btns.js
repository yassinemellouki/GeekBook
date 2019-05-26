import React, {Component} from 'react';
import Bag from '../../img/shopping-bag.svg';
import Star from '../../img/star.svg';
import ReactSVG from 'react-svg';
import {connect} from 'react-redux';
import * as bookActions from "../../redux/actions/bookActions";

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_bag: 0,
      to_fav: false,
    };
		this.favToggle = this.favToggle.bind(this)
		this.bagToggle = this.bagToggle.bind(this)
  }

	componentDidUpdate(){
			console.log(this.props.state.books.bag)
      let fav_icon = document.getElementById(
          'fav_' + this.props.bookId,
        ),
        fav_bg = fav_icon.querySelector('svg .bg');
		if(this.props.state.books.favorite.includes(this.props.bookId)){
        fav_bg.style.fill = 'red';
      } else {
       fav_bg.style.fill = 'none';
      }
	}

    favToggle = function() {
			this.props.dispatch(bookActions.addToFavorite(this.props.bookId))
    };

    bagToggle = function() {
			this.props.dispatch(bookActions.addToBag(this.props.bookId))
    };

  render() {
		/*
    let toggleBag = () => {
      if (this.state.to_bag > 0) {
        let bag_icon = document.getElementById(
          'bags_' + this.props.bookDetails.id,
        );
        let bag_bg = bag_icon.getElementsByTagName('ellipse')[0],
          text = bag_icon.getElementsByTagName('text')[0];

        bag_bg.style.fill = 'red';
        text.innerHTML = this.state.to_bag;
        if (this.state.to_bag > 9) {
          text.setAttribute('transform', 'matrix(1.19 0 0 1 80 366.5)');
        }
      }
    };
		*/


    return (
      <div className="card-btns">
        <div className="icons-row">
          <div
            className="bags-btn" id={"bag_"+ this.props.bookId} onClick={this.bagToggle}>
            <div className="btn bag-img">
              <ReactSVG src={Bag} />
            </div>
          </div>
          <div
            className="favorite-btn" id={"fav_"+ this.props.bookId} onClick={this.favToggle}>
            <div className="btn fav-img" >
              <ReactSVG src={Star} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
	return {state}
}

export default connect(mapStateToProps)(Btn);
