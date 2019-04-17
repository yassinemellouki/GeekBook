import React, {Component} from 'react';
import Bag from '../../img/shopping-bag.svg';
import Star from '../../img/star.svg';
import ReactSVG from 'react-svg';

class Btn extends Component {
  state = {
    to_bag: [],
    to_fav: false,
  };

  render() {
    let addToFavorite = () => {
      this.setState({to_fav: !this.state.to_fav});
    };

    let addToBag = () => {
      this.setState({to_bag: [...this.state.to_bag, this.props.bookDetails]});
      console.log(this.state.to_bag);
    };

		let favToggle = function(){
      let fav_icon = document.getElementById(
          'fav_' + this.props.bookDetails.id,
        ),
        fav_bg = fav_icon.querySelector('svg .bg');

      if (this.state.to_fav) {
        fav_bg.style.fill = 'red';
      } else {
        fav_bg.style.fill = 'none';
      }
		}


		let isaFav = (data) => {
			console.log(data)
		}
    return (
      <div className="card-btns">
        <div className="icons-row">
          <div
            className="bags-btn"
            id={'bags_' + this.props.bookDetails.id}
            onClick={addToBag}>
            <div className="btn bag-img">
              <ReactSVG src={Bag} />
            </div>
          </div>
          <div onClick={this.props.isaFav}
            className="favorite-btn"
            id={'fav_' + this.props.bookDetails.id}
            //onClick={addToFavorite}
			>
            <div className="btn fav-img">
			<ReactSVG src={Star} onInjected = {favToggle.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Btn;
