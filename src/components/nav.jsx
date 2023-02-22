import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../utils/auth';

const Nav = () => {

  const auth  = useAuth()

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/signup">signup</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        {!auth.user && <li>
          <NavLink to="/login">Login</NavLink>
        </li>}
      </ul>
    </div>
  )
}

export default Nav;