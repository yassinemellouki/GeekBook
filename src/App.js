import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Cards from './components/cards';
import Footer from './components/footer';
import {connect} from 'react-redux';
import * as bookActions from "./redux/actions/bookActions";
class App extends Component {
  state = {
    to_favorite: [],
  };

  componentWillMount() {
		if(window.localStorage.getItem("refrech") == null){
		window.localStorage.setItem('refrech', 'false')
		}
    if (localStorage.getItem('favorite') != null) {
      this.setState({
        to_favorite: JSON.parse(window.localStorage.getItem('favorite')),
      });
		}else{
      this.setState({
        to_favorite: [],
      });
		}
  }

	componentDidMount(){
		if(window.localStorage.getItem("refrech") == "false"){
				location.reload();
		window.localStorage.setItem('refrech', 'true')
		}
		}
  toFav = data => {
		if(data === null){
    window.localStorage.setItem('favorite', JSON.stringify([]));
		}else{
    window.localStorage.setItem('favorite', JSON.stringify(data));
		}

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

	submitedBook(){
		console.log("submited book")
	}



  render() {
    return (
      <React.Fragment>
        <Header toFav={this.state.to_favorite} />
        <div className="cards-body">
          <Cards toFav={this.toFav} favSigned={this.state.to_favorite} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state, ownProps){
	return {
		books: state
	}
}

export default connect(mapStateToProps)(App);
