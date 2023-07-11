import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid black;
  box-shadow: 0px 10px 6px rgb(187, 187, 187);
  margin-bottom: 40px;
  padding: 12px 30px;
`;
export const HeaderContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  nav {
    display: flex;
    gap: 10px;
  }
`;
export const Container = styled.div`
  flex-shrink: 0;
  max-width: 930px;
  margin: 0;
  padding: 0 30px 100px;

  @media screen and (min-width: 555px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 950px) {
    padding: 0 20px 50px;
  }
`;
export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Link = styled(NavLink)`
  padding: 8px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgb(136 74 9);
  }
`;

export const Icon = styled.span`
  margin-right: 10px;
  font-size: 25px;
`;

export const Footer = styled.footer`
  margin-top: auto;
  flex-shrink: 0;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  background-color: #fff1e0;
`;

export const Info = styled.p`
  padding: 7px;
  margin: 0;
  font-size: 10px;
  text-align: center;
`;

export const API = styled.a`
  color: #795548;
`;
