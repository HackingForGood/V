import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom'

const Nav = () => (
  <Menu>
    <Link to='/'><Menu.Item> Tutor! </Menu.Item></Link>
  </Menu>
);

export default Nav;
