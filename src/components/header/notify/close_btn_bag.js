import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as bookActions from '../../../redux/actions/bookActions';

class ClosBagebtn extends Component {
  removeBook = () => {
    this.props.dispatch(bookActions.removeFromFavBag(this.props.bookId));
    console.log('clicked here');
  };

  componentDidUpdate() {
    console.log('details');
    console.log(this.props.state.books.fav_bag);
    console.log(this.props.state.books.bag);
  }

  render() {
    return (
      <div onClick={this.removeBook} className="close-btn">
        <button>Delete</button>
      </div>
    );
  }
}

function mapStateToProsp(state) {
  return {state};
}

export default connect(mapStateToProsp)(ClosBagebtn);
