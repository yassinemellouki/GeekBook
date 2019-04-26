import React, {Component} from 'react';
import Bag from '../../img/shopping-bag.svg';
import Star from '../../img/star.svg';
import ReactSVG from 'react-svg';

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_bag: 0,
      to_fav: false,
    };
  }
  componentDidUpdate(props, prevState) {
    let id = props.bookDetails.id;
    if (localStorage.getItem('bag_' + id) === null) {
      let addData = JSON.stringify(this.state.to_bag);
      window.localStorage.setItem('bag_' + id, addData);
    } else {
      let prevData = [window.localStorage.getItem('bag_' + id)];
      let addData = JSON.stringify(this.state.to_bag);
      window.localStorage.setItem('bag_' + id, addData);
    }
  }

  componentWillMount(props, prevState) {
    let id = this.props.bookDetails.id;
      let prevData = window.localStorage.getItem('bag_' + id);
			this.setState({to_bag: JSON.parse(prevData)})
  }

  render() {
    let addToBag = () => {
      this.setState({to_bag: this.state.to_bag + 1});
    };

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
