import React from 'react';
import { Link } from 'react-router-dom';
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
              <Link to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to='/favorites'>Favorites</Link>
            </NavItem>
          </NavList>
        </NavBar>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
