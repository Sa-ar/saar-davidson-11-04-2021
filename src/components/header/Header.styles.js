import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  position: sticky;
  justify-content: space-between;
  padding: 1rem;
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
