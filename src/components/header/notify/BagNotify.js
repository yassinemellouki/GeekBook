import React, {Component} from 'react';
import Card from './card';
import {connect} from 'react-redux';

class FavNotify extends Component {
  render() {
    let elemBagList = this.props.bagBooksList.map(function(bagbook) {
      return <Card key={bagbook.id} bookInfos={bagbook} />;
    });

    {
      if (this.props.bagBooksList.length != 0) {
        return <div className="bag_notify">{elemBagList}</div>;
      } else {
        return (
          <div className="bag_notify text">
            <h4>Shopping bag is empty.</h4>
          </div>
        );
      }
    }
  }
}

function mapStateToProps(state) {
  return {bagBooksList: state.books.fav_bag};
}

export default connect(mapStateToProps)(FavNotify);
