import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Cards from './components/cards';
import Footer from './components/footer';
class App extends Component {
	state={
		to_favorite : []
	}
	toFav= (data) => {
		this.setState({to_favorite: data})
		console.log(this.state.to_favorite)
	}
  render() {
    return (
      <React.Fragment>
        <Header data={this.toFav}/>
        <div className="cards-body">
          <Cards toFav={this.toFav} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
