import React, {Component} from 'react';
import Card from './card';

class Cards extends Component {
  state = {
    books: [
      {
				id:"1",
        title: 'HTTP: The Definitive Guide',
        author: 'David Gourley',
        cover: 'http',
        price: '46,61',
      },
      {
				id:"2",
        title: 'HTTP: The Definitive Guide',
				title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        cover: 'js',
        price: '35,52',
      },
      {
				id:"3",
        title: 'HTTP: The Definitive Guide',
				title: 'The TCP/IP Guide: A Comprehensive, Illustrated Internet Protocols Reference',
        author: 'Charles M.Kozierok',
        cover: 'tcp_ip',
        price: '54,50',
      },
      {
				id:"4",
        title: 'HTTP: The Definitive Guide',
				title: 'Node.js 8 the Right Way: Practical, Server-Side JavaSCript The Scales',
        author: 'Jim Wilson',
        cover: 'nodejs',
        price: '28,21',
      },
    ],
		favorite: [],
		bag: [],
  };
  render() {
    return this.state.books.map((book)=> <Card bookInfos={book} />);
  }
}

export default Cards;
