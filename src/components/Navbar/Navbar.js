import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavbarContainer, Logo, NavIcon, NavMenu, NavItem, NavLinks, MobileIcon } from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Logo>
                        <NavIcon />
                        CARO.
                    </Logo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
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
