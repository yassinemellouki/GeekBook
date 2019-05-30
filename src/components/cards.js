import React, {Component} from 'react';
import Card from './card';
import {connect} from 'react-redux';

class Cards extends Component {
  render() {
    return (
      <div className="cards">
        {this.props.books.map(book => (
          <Card key={book.id} bookInfos={book} />
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {books: state.books.books};
}
export default connect(mapStateToProps)(Cards);
