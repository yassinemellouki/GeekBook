import React, {Component} from 'react';
import Cover from './book/cover';
import Details from './book/details';
import Btn from './book/btns';
import Closebtn from './book/close_btn';

class Card extends Component {
	state = {
		notif_bags : [],
		notif_fav : false
	}
  addToFavorite = (data) => {
		this.setState({notif_fav: !this.state.notif_fav})
    };
		componentDidUpdate(prevProps, prevState){
			if(prevState.notif_fav != this.state.notif_fav){
			if(this.state.notif_fav){
				this.props.isaFav(this.props.bookInfos)
			}else{
				this.props.isaFav(this.props.bookInfos.id, false)
			}
			}
		}
  render() {
    return (
      <div className="card-section">
        <Closebtn />
        <div className="book-card">
          <Cover img={this.props.bookInfos.cover} />
          <div className="card-content">
            <Details title={this.props.bookInfos.title}  author={this.props.bookInfos.author} price={this.props.bookInfos.price}/>
            <Btn isaFav={this.state.notif_fav} addToFavorite={this.addToFavorite} bookDetails={this.props.bookInfos} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
