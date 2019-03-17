import { Link } from '../src';
import React from 'react';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to={'/'}>home</Link>
      </li>
      <li>
        <Link to={'/about'}>about</Link>
      </li>
      <li>
        <Link to={'/foo'}>foo</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
