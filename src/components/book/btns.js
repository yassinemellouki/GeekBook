import React, {Component} from 'react';
import Star from '../../img/star.svg';
import ReactSVG from 'react-svg';
import {connect} from 'react-redux';
import * as bookActions from '../../redux/actions/bookActions';
import Bagsbtn from './btns/bags.js'

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_bag: 0,
      to_fav: false,
    };
    this.favToggle = this.favToggle.bind(this);
    this.changeElement = this.changeElement.bind(this);
  }

  componentDidUpdate() {
    //toggle favorite button
    let fav_icon = document.getElementById('fav_' + this.props.bookId),
      fav_bg = fav_icon.querySelector('svg .bg');
    if (this.props.state.books.favorite.includes(this.props.bookId)) {
      fav_bg.style.fill = 'red';
    } else {
      fav_bg.style.fill = 'none';
    }

  }
  favToggle = function() {
    this.props.dispatch(bookActions.addToFavorite(this.props.bookId));
  };

	changeElement = () => {
	let	newElement = <Bagsbtn bookId={this.props.bookId} />;
		if(this.props.state.books.bag.length != 0){
			this.props.state.books.bag.forEach(bg => {
				if(bg.bagId == this.props.bookId){
						newElement = <Bagsbtn bag={bg} bookId={this.props.bookId} />;
				}			})
		}		return newElement;
	}

  render() {	
    return (
      <div className="card-btns">
        <div className="icons-row">
					{this.changeElement()}
          <div
            className="favorite-btn"
            id={'fav_' + this.props.bookId}
            onClick={this.favToggle}>
            <div className="btn fav-img">
              <ReactSVG src={Star} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state};
}

export default connect(mapStateToProps)(Btn);
