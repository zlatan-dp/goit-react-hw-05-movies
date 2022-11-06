import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieInfoWrap = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
`;

export const MovieInfo = styled.div`
  margin-left: 16px;
`;

export const BackLink = styled(NavLink)`
  padding: 4px;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 8px;
  display: inline-block;
  :hover {
    background-color: #f5f5f0;
  }
`;

export const AddInfo = styled.div`
  border-bottom: 1px solid gray;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: blue;
  }
`;
