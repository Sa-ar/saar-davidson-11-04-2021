import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HeaderWrapper,
  NavBar,
  NavList,
  NavItem,
  Container,
} from './Header.styles';

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <h2>Herolo Weather Task</h2>
        <NavBar>
          <NavList>
            <NavItem>
              <NavLink exact activeClassName='selected' to='./'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName='selected' to='./favorites'>
                Favorites
              </NavLink>
            </NavItem>
          </NavList>
        </NavBar>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
