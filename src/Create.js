import React, { Component } from "react";
import { newColor } from "./store";
import {connect} from 'react-redux';

class Create extends Component{
  constructor(){
    super();
    this.state = {
      newColor: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt){
    this.setState({
      newColor: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.newColor(this.state.newColor);
  }

  render(){
    
    return(
      <form onSubmit={this.handleSubmit}>
        <h3>Add a New Color</h3>
        <input placeholder="Valid CSS Color" value={this.state.newColor} onChange={this.handleChange}></input>
        <button>Save</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    newColor: function(colorName){
      dispatch(newColor(colorName, history));

    }
  

  }
}

export default connect(null, mapDispatchToProps)(Create);