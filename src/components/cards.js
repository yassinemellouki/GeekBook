import React, {Component} from 'react';
import Card from './card';

class Cards extends Component {
  render() {
    return this.props.books.map((book)=> <Card bookInfos={book} />);
  }
}

export default Cards;
