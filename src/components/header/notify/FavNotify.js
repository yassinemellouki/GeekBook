import React, {Component} from 'react';
import Card from './Card'
import {connect} from 'react-redux';

class FavNotify extends Component {

	render(){
		console.log(this.props.favBooksList)
		return(
		<div className="fav_notify">
			{this.props.favBooksList.map(function(favbook){
				return <Card key={favbook.id} bookInfos={favbook} />
			})}
			</div>	
		)	
	}

}

function mapStateToProps(state){
	return {favBooksList : state.books.favBooksList}
}

export default connect(mapStateToProps)(FavNotify);
