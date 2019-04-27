import React, {Component} from 'react';
import Cover from './book/cover';
import Details from './book/details';
import Btn from './book/btns';
import Closebtn from './book/close_btn';

class Card extends Component {
  state = {
    notif_bags: [],
    notif_fav: false,
    remove: false,
  };
  addToFavorite = data => {
    this.setState({notif_fav: !this.state.notif_fav});
  };

  componentWillMount() {
    if (this.props.favSigned.length > 0) {
      if (this.props.favSigned[0].id === this.props.bookInfos.id) {
        this.setState({notif_fav: true});
      }
    }
  }

  /*localfav.filter(
        book =>
          book.id === this.props.bookInfos.id &&
          this.setState({notif_fav: true}),
      );
    }*/
  close = () => {
    this.setState({remove: true});
  };
  componentDidUpdate(props, prevState) {
    if (prevState.notif_fav != this.state.notif_fav) {
      if (this.state.notif_fav) {
        this.props.isaFav(this.props.bookInfos);
      } else {
        this.props.isaFav(this.props.bookInfos.id, false);
      }
    }
    if (this.state.remove === true) {
      console.log('remove please');
      let all_books = JSON.parse(window.localStorage.getItem('books')),
        id = this.props.bookInfos.id;
      console.log(all_books);
      console.log(this.props.bookInfos.id);
      let new_books_list = all_books.filter(book => book.id != id);
      window.localStorage.setItem('books', JSON.stringify(new_books_list));
      location.reload();
    }
  }
  render() {
    return (
      <div className="card-section">
        <Closebtn onClick={this.close} />
        <div className="book-card">
          <Cover img={this.props.bookInfos.cover} />
          <div className="card-content">
            <Details
              title={this.props.bookInfos.title}
              author={this.props.bookInfos.author}
              price={this.props.bookInfos.price}
            />
            <Btn
              isaFav={this.state.notif_fav}
              addToFavorite={this.addToFavorite}
              bookDetails={this.props.bookInfos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
