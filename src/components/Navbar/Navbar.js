import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, Logo, NavIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Logo>
                        <NavIcon />
                        CARO.
                    </Logo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/projects'>
                                Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/blog'>
                                Blog
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
