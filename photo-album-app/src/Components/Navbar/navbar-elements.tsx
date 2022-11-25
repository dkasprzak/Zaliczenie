import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  height: 70px;
  justify-content: space-between;
  background-color: #a074f1;  
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  width: 100%;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;