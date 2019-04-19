import React, {Component} from 'react';
import Cover from './book/cover';
import Details from './book/details';
import Btn from './book/btns';
import Closebtn from './book/close_btn';

class Card extends Component {
	state = {
		notif_bags : [],
		notif_fav : []
	}
  addToFavorite = (data) => {
		let notif = this.state.notif_fav;
		console.log(notif)
		notif.push(data)
		this.setState({notif_fav: notif})
		console.log(this.state.notif_fav)
    };
  render() {
		let isaFav = (valu) => {
			console.log(valu)
		}
    return (
      <div className="card-section">
        <Closebtn />
        <div className="book-card">
          <Cover img={this.props.bookInfos.cover} />
          <div className="card-content">
            <Details title={this.props.bookInfos.title}  author={this.props.bookInfos.author} price={this.props.bookInfos.price}/>
            <Btn addToFavorite={this.addToFavorite} bookDetails={this.props.bookInfos} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
