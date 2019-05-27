import React, {Component} from 'react';
import Card from './Card'
import {connect} from 'react-redux';

class FavNotify extends Component {

	render(){
	console.log(this.props)
		return (
		<div className="fav_notify">
			<Card bookInfos={this.props.bookInfos}/>
			<h3>Hello World</h3>
		</div>		
		)
	}

}

function mapStateToProps(state){
	return {bookInfos : state.books.books[0]}
}

export default connect(mapStateToProps)(FavNotify);
