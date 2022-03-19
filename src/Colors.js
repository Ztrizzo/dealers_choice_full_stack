import React, { Component } from "react";
import {connect} from 'react-redux';
import {loadColors} from './store';

class Colors extends Component {
  
  componentDidMount(){
    this.props.loadColors();
  }
  
  render(){
    return(
      <div id='colors'>
        <ul>
          {this.props.colors.map(color => {
            return <li key={color.id}>{color.name}</li>
          })}
        </ul>
        
      </div>
    )
  }
    
  
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return{
    loadColors: function(){
      dispatch(loadColors());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Colors);