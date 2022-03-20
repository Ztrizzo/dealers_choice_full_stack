import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

const filterFavorites = (colors, favorite) => {
  if (favorite)
    return colors.filter(color => color.favorite)
  else
    return colors.filter(color => !color.favorite);
}

class Colors extends Component {

  render(){
    
    //filters out colors depending on what nav bar link is selected
    let colors = this.props.colors;
    if(this.props.match.path === '/colors/favorites')
      colors = filterFavorites(colors, true)
    if(this.props.match.path === '/colors/nonfavorites')
      colors = filterFavorites(colors, false);

    //alphabetical sort based on color name
    colors = colors.sort((a, b) => {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    });

    return(
      <div id='colors'>
        <ul>
          {colors.map(color => {
            return <Link to={`/color/${color.id}`} key={color.id} className='link'><li>{color.name}{color.favorite ? <span>{'\u2605'}</span> : null}</li></Link>
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