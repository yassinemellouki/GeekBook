import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Cards from './components/cards';
import Footer from './components/footer';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="cards-body">
          <Cards />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
