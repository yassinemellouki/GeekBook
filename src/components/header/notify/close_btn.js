import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as bookActions from '../../../redux/actions/bookActions';

class Closebtn extends Component {
  removeBook = () => {
    this.props.dispatch(bookActions.removeFavBook(this.props.bookId));
    console.log(this.props);
  };
  render() {
    return (
      <div onClick={this.removeBook} className="fav-close close-btn">
        <button>Delete</button>
      </div>
    );
  }
}

function mapStateToProsp(state) {
  return {state};
}

export default connect(mapStateToProsp)(Closebtn);
