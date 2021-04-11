import React from 'react';
import { HeaderWrapper, NavBar, NavList, NavItem } from './Header.styles';

function Header() {
  return (
    <HeaderWrapper>
      <h2>Herolo Weather Task</h2>
      <NavBar>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>Favorites</NavItem>
        </NavList>
      </NavBar>
    </HeaderWrapper>
  );
}

export default Header;
