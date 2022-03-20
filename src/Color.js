import React from "react";
import { connect } from "react-redux";
import {addFavorite} from './store';

const Color = (props) => {
  const color = props.colors.find(color => color.id === props.match.params.id * 1);
  
  if(color)
    return(
      <div id='color'>
        <h3>{color.name}</h3>
        <div id='colorBox' style={{background: color.name}}></div>
        <button onClick={() => props.addFavorite(color.id)}>
          {color.favorite ? <span>Remove Favorite</span> : <span>Add Favorite</span>}
        </button>
      </div>
    )
  else{
    return(null)
  }
}

const mapDispatchToProps = (dispatch, otherProps) => {
  return {
    addFavorite: function (id){
      console.log(otherProps);
      dispatch(addFavorite(id));
      otherProps.history.push('/colors');
    }
  }
}

export default connect(state => state, mapDispatchToProps)(Color);