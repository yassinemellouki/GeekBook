import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Cards from './components/cards';
import Footer from './components/footer';
class App extends Component {
  state = {
    books: [
      {
        title: 'HTTP: The Definitive Guide',
        author: 'David Gourley',
        cover: 'http',
        price: '46,61',
      },
      {
				title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        cover: 'js',
        price: '35,52',
      },
      {
				title: 'The TCP/IP Guide: A Comprehensive, Illustrated Internet Protocols Reference',
        author: 'Charles M.Kozierok',
        cover: 'tcp_ip',
        price: '54,50',
      },
      {
				title: 'Node.js 8 the Right Way: Practical, Server-Side JavaSCript The Scales',
        author: 'Jim Wilson',
        cover: 'nodejs',
        price: '28,21',
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="cards-body">
          <Cards books={this.state.books} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
