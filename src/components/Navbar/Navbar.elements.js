import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
background: #fff;
height: 80px;
display: flex;
justify-content: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px
`;

export const Logo = styled(Link)`
text-decoration: none;
cursor: pointer;
font-size: 2rem;
color: #101522;
display: flex;
justify-content: flex-start;
align-items: center;
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
