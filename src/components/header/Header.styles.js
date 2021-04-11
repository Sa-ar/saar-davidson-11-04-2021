import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;

  background-color: #cba5fa;
  color: #fff;
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
