import React from "react";
import { connect } from "react-redux";
import {addFavorite, deleteColor} from './store';

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
        <button id='deleteButton' onClick={() => props.delete(color.id)}>
          X
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
      dispatch(addFavorite(id));
      otherProps.history.push('/colors');
    },
    delete: function(id) {
      dispatch(deleteColor(id))
      otherProps.history.push('/colors');
    }
  }
}

export default connect(state => state, mapDispatchToProps)(Color);