import React, {Component} from 'react';
import Card from './Card'
import {connect} from 'react-redux';

class FavNotify extends Component {

	render(){
		let elemFavList = this.props.favBooksList.map(function(favbook){
									return <Card key={favbook.id} bookInfos={favbook} />
								})

		console.log("elemFavList")
		console.log(elemFavList)
		console.log("elemBagList")
		console.log(this.props.bagBooksList)
		{
			if(this.props.favBooksList.length != 0){
					return  (
						<div className="bag_notify">
							{elemFavList}
						</div>	
					)
			}else{
					return  (
						<div className="bag_notify text">
								<h4>Shopping bag is empty.</h4>
						</div>	
					)
			}

		}
		/*
		return(
			{this.props.favBooksList.map(function(favbook){
				return <Card key={favbook.id} bookInfos={favbook} />
			})}
		)	
			*/
	}

}

function mapStateToProps(state){
	return {favBooksList : state.books.favBooksList, bagBooksList: state.books.bag}
}

export default connect(mapStateToProps)(FavNotify);
