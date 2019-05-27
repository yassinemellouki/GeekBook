import React, {Component} from 'react';

class Price extends Component {
  render() {
    return (
      <div className="price-btn">
        <span>{this.props.price} $</span>
      </div>
    );
  }
}

export default Price;
