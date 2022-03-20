import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <nav>
      <Link to='/create' id='createLink'>Create</Link>
      <Link to='/colors'>All</Link>
      <Link to='/colors/favorites'>Favorites</Link>
      <Link to='/colors/nonfavorites'>Non-Favorites</Link>
    </nav>
    
  )
}


export default connect()(Nav);