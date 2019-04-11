import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Card from './components/card';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="cards-body">
          <Card />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
