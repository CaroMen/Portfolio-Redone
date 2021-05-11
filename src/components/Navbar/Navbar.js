import React from 'react';
import { Nav, NavbarContainer, Logo, NavIcon } from './Navbar.elements';

const Navbar = () => {
    return (
        <>
            <Nav className="navbar-outer">
                <NavbarContainer>
                    <Logo>
                        <NavIcon />
                        CARO.
                    </Logo>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
