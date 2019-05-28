import React, {Component} from 'react';
import Card from './Card'
import {connect} from 'react-redux';

class FavNotify extends Component {

	componentDidUpdate(){
		console.log(this.props.books.favorite)
	}

	render(){
		return(
		<div className="fav_notify">

			</div>	
		)	
	}

}

function mapStateToProps(state){
	return {books : state.books}
}

export default connect(mapStateToProps)(FavNotify);
