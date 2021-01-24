import React from 'react';
import {
  AppHeader,
  Title,
  NavList,
  NavItem,
  NavLink
} from './styled';

export const Header: React.FC = () => {
  return (
    <AppHeader>
      <Title>
        Star DB
      </Title>
      <nav>
        <NavList>
          <NavItem>
            <NavLink href="#">People</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Planets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Starships</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </AppHeader>
  )
}