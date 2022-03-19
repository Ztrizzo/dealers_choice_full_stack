import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <Link to='/colors'>All</Link>
  )
}


export default connect()(Nav);