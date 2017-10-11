import React from 'react';
import { Link } from 'react-router';
import BackButton from '../components/BackButton';

const Layout = (props) => {
 debugger
  return(
    <div>
      <h2>Choose the Game you want to play</h2>
      <Link to='/computer'>Cumputer Game</Link>{' | '}
      <Link to='/friend'>Friend Game</Link>
    </div>
  )
}

export default Layout;
