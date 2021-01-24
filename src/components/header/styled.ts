import styled from 'styled-components';

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: .5rem;
  padding: 0 1rem;
`;

export const Title = styled.h2`
  color: #00bc8c;
`;

export const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0.5rem 1rem;
  list-style: none;
`;

export const NavItem = styled.li`
  list-style: none;
  margin: 0;
  padding: .5rem 1rem;
  border-radius: 3px;

  :hover {
    background-color: #444;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
`;