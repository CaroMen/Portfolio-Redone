import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
background: #fff;
height: 80px;
display: flex;
justify-content: space-evenly;
/* padding-right: 20px; */
/* align-items: center; */
/* justify-self: center; */
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`;

export const NavbarContainer = styled.div`
display: flex;
/* justify-content: center; */
height: 80px;
`;

export const Logo = styled(Link)`
color: #101522;
/* justify-self: flex-start; */
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
/* align-items: center; */
/* justify-content: flex-start; */
`;

export const NavIcon = styled.div`
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover {
    border-bottom: 2px solid #CF9FFF;
}
`;

export const NavLinks = styled(Link)`
color: #101522;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
`;
