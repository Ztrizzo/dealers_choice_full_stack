import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <nav>
      <Link to='/colors'>All</Link>
      <Link to='/selected'>Selected</Link>
      <Link to='/unselected'>Unselected</Link>
    </nav>
    
  )
}


export default connect()(Nav);