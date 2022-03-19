import React from "react";
import { connect } from "react-redux";

const Color = (props) => {
  console.log(props);
  const color = props.colors.find(color => color.id === props.match.params.id * 1);
  
  if(color)
    return(
      <div id='color'>
        <h3>{color.name}</h3>
        <div id='colorBox' style={{background: color.name}}></div>
      </div>
    )
  else{
    return(null)
  }
}


export default connect(state => state)(Color);