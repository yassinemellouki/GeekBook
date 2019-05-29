import React, {Component} from 'react';
import ReactSVG from 'react-svg';
import Bag from '../../../img/shopping-bag.svg';
import * as bookActions from '../../../redux/actions/bookActions';
import {connect} from 'react-redux';

class Bagsbtn extends Component {
	constructor(props){
		super(props);
			this.bagToggle = this.bagToggle.bind(this);
	}

  bagToggle = function() {
    this.props.dispatch(bookActions.addToBag(this.props.bookId));
    this.props.dispatch(bookActions.addToFavBag(this.props.bookId));
  };

	componentDidUpdate(){
    //toogle bags butoon
    let bag_icon = document.getElementById('bag_' + this.props.bookId);
    let bag_bg = bag_icon.getElementsByTagName('ellipse')[0],
      text = bag_icon.getElementsByTagName('text')[0];
    let bookId = this.props.bookId;
		let bagProps = this.props.state.books.bag.filter(bg => bg.bagId == bookId)		

		if(this.props.bag){
			if(this.props.bag.count > 0){
				text.innerHTML = this.props.bag.count;
				bag_bg.style.fill= 'red';
          if (this.props.bag.count > 9) {
            text.setAttribute('transform', 'matrix(1.19 0 0 1 80 366.5)');
          }
			}
		}else{
				text.innerHTML = '';
				bag_bg.style.fill= 'none';
        text.setAttribute('transform', 'matrix(1.19 0 0 1 135 366.5)');
		}
	}

  render() {
    return (
				<div
            className="bags-btn"
            id={'bag_' + this.props.bookId}
            onClick={this.bagToggle}>
            <div className="btn bag-img">
              <ReactSVG src={Bag} />
            </div>
          </div>
    )
  }
}


function mapStateToProps(state) {
  return {state};
}
export default connect(mapStateToProps)(Bagsbtn);
