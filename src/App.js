import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Cards from './components/cards';
import Footer from './components/footer';
class App extends Component {
/*  state = {
    to_favorite: [],
  };
	*/

  toFav = data => {
    window.localStorage.setItem('favorite', JSON.stringify(data));
		//console.log(localBooks)
		//this.setState({to_favorite: data})
    /*this.setState(function(prevState, props) {
      if (prevState.to_favorite !== data) {
      if (prevState.to_favorite.includes(data) === false) {
        return {to_favorite: data};
      }
      }
    });
		*/
  };
  render() {
    return (
      <React.Fragment>
        <Header /*data={this.state.to_favorite}*/ />
        <div className="cards-body">
          <Cards toFav={this.toFav} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
