import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
      <NavLink to="/new" activeClassName="active">New</NavLink>
      <NavLink to="/help" activeClassName="active">Help</NavLink>
    </header>
  )
}

export default Header;