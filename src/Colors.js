import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

class Colors extends Component {

  render(){
    return(
      <div id='colors'>
        <ul>
          {this.props.colors.map(color => {
            return <Link to={`/color/${color.id}`} key={color.id}><li>{color.name}</li></Link>
          })}
        </ul>
        
      </div>
    )
  }
    
  
}

const mapStateToProps = (state) => {
  return state
}


export default connect(mapStateToProps)(Colors);