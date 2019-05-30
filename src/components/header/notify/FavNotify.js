import React, {Component} from 'react';
import Card from './Card';
import {connect} from 'react-redux';

class FavNotify extends Component {
  render() {
    let elemFavList = this.props.favBooksList.map(function(favbook) {
      return <Card key={favbook.id} bookInfos={favbook} />;
    });
    {
      if (this.props.favBooksList.length != 0) {
        return <div className="fav_notify">{elemFavList}</div>;
      } else {
        return (
          <div className="fav_notify text">
            <h4>There is no listed favorite book.</h4>
          </div>
        );
      }
    }
  }
}

function mapStateToProps(state) {
  return {favBooksList: state.books.favBooksList};
}

export default connect(mapStateToProps)(FavNotify);
