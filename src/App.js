import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Card from './components/card';
import Footer from './components/footer';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="cards-body">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
