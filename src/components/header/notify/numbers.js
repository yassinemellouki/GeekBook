import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as bookActions from '../../../redux/actions/bookActions';

class Numbers extends Component {


  render() {

    return (
      <div className="number-btn">
				<button>{this.props.number.number}</button>
      </div>
    );
  }
}

function mapStateToProsp(state){
	return {state}	
}
export default connect(mapStateToProsp)(Numbers);
