import React, {Component} from 'react';
import Card from './card';

class Cards extends Component {
  state = {
    books: [],
    favorite: [],
    bag: [],
		defaultBooks: [
      {
        id: '1',
        title: 'HTTP: The Definitive Guide',
        author: 'David Gourley',
        cover: 'http',
        price: '46,61',
      },
      {
        id: '2',
        title: 'HTTP: The Definitive Guide',
        title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        cover: 'js',
        price: '35,52',
      },
      {
        id: '3',
        title: 'HTTP: The Definitive Guide',
        title:
          'The TCP/IP Guide: A Comprehensive, Illustrated Internet Protocols Reference',
        author: 'Charles M.Kozierok',
        cover: 'tcp_ip',
        price: '54,50',
      },
      {
        id: '4',
        title: 'HTTP: The Definitive Guide',
        title:
          'Node.js 8 the Right Way: Practical, Server-Side JavaSCript The Scales',
        author: 'Jim Wilson',
        cover: 'nodejs',
        price: '28,21',
      },
		]
  };
  componentWillMount() {
		if (window.localStorage.getItem('books') !== null){
      this.setState({books: JSON.parse(window.localStorage.getItem('books'))});
		}else{
      this.setState({books: this.state.defaultBooks });
		}

    let local_data = JSON.parse(window.localStorage.getItem('favorite'));
    this.setState({favorite: local_data});
  }
  componentDidMount() {
    window.localStorage.setItem('books', JSON.stringify(this.state.books));
  }

  isaFav = data => {
    /*let prev_localS = window.localStorage.getItem('favorite');
		prev_localS = JSON.stringify(prev_localS)
		let new_localS = JSON.stringify(data);
		console.log(prev_localS)
		console.log(new_localS)
		*/

    /*
    if (typeof data === 'object') {
      this.setState({favorite: [...this.state.favorite, data]});
    } else {
      this.setState({
        favorite: this.state.favorite.filter(fav => fav.id != data[0]),
      });
    }
		*/

    if (typeof data == 'object') {
      this.setState({favorite: [...this.state.favorite, data]});
    } else {
      let local_data = JSON.parse(window.localStorage.getItem('favorite'));
      this.setState({
        favorite: this.state.favorite.filter(fav => fav.id != data[0]),
      });
    }
  };

  render() {
		console.log(this.state.favorite)
    return (
      <div className="cards" tofav={this.props.toFav(this.state.favorite)}>
        {this.state.books.map(book => (
          <Card
            isaFav={this.isaFav}
            bookInfos={book}
            favSigned={this.props.favSigned.filter(fav => fav.id == book.id)}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
