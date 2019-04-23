import React, {Component} from 'react';
import Bag from '../../img/shopping-bag.svg';
import Star from '../../img/star.svg';
import ReactSVG from 'react-svg';

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_bag: [],
      to_fav: false,
    };
  }
  componentDidUpdate() {
    if (localStorage.getItem('bags') === null) {
      let addData = JSON.stringify(this.state.to_bag);
      window.localStorage.setItem('bags', addData);
      console.log(localStorage.getItem('bags'));
    } else {
      let prevData = [window.localStorage.getItem('bags')];
      let addData = JSON.stringify(this.state.to_bag),
        newData = [...prevData, addData];
      console.log(prevData);
      console.log(addData);
      console.log(newData);
      //window.localStorage.setItem('bags', newData)
    }
  }

  render() {
    let addToBag = () => {
      this.setState({to_bag: this.props.bookDetails});
      if (this.state.to_bag.length > 0) {
      }
    };

    let toggleBag = () => {
      if (this.state.to_bag.length > 0) {
        let bag_icon = document.getElementById(
          'bags_' + this.props.bookDetails.id,
        );
        let bag_bg = bag_icon.getElementsByTagName('ellipse')[0],
          text = bag_icon.getElementsByTagName('text')[0];

        bag_bg.style.fill = 'red';
        text.innerHTML = this.state.to_bag.length;
      }
    };

    let favToggle = function() {
      let fav_icon = document.getElementById(
          'fav_' + this.props.bookDetails.id,
        ),
        fav_bg = fav_icon.querySelector('svg .bg');

      if (this.props.isaFav) {
        fav_bg.style.fill = 'red';
      } else {
        fav_bg.style.fill = 'none';
      }
    };

    return (
      <div className="card-btns">
        <div className="icons-row">
          <div
            className="bags-btn"
            id={'bags_' + this.props.bookDetails.id}
            onClick={addToBag}>
            <div className="btn bag-img">
              <ReactSVG src={Bag} onInjected={toggleBag} />
            </div>
          </div>
          <div
            onClick={() => this.props.addToFavorite(this.props.bookDetails)}
            className="favorite-btn"
            id={'fav_' + this.props.bookDetails.id}>
            <div className="btn fav-img">
              <ReactSVG src={Star} onInjected={favToggle.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Btn;
