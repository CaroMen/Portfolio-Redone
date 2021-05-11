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
font-size: 1.2rem;
color: #101522;
display: flex;
justify-self: flex-start;
align-items: center;
`;

export const NavIcon = styled.div`
`;
