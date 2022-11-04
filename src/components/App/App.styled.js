import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 32px;
  background-color: #fff;
`;

export const Header = styled.header`
  padding: 16px 0;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.37);
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: blue;
  }
`;
