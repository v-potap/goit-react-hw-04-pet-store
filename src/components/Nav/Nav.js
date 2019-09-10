import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './Nav.module.css';

const activeStyle = {
  color: 'orange',
};

function Nav() {
  return (
    <nav className={st.navBar}>
      <ul className={st.navItemsList}>
        <li className={st.navItem}>
          <NavLink to="/" exact activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li className={st.navItem}>
          <NavLink to="/pets" activeStyle={activeStyle}>
            Pets
          </NavLink>
        </li>
        <li className={st.navItem}>
          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
