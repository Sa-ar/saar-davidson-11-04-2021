import styled from 'styled-components';
import { Container as HeaderContainer } from '../../shared.styles';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  padding: 0;

  background-color: #cba5fa;
  color: #fff;
`;

export const Container = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const NavBar = styled.nav``;

export const NavList = styled.ol`
  display: flex;
  list-style-type: none;
`;

export const NavItem = styled.li`
  &:not(:first-child) {
    margin-left: 1rem;
  }
`;
