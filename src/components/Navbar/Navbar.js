import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavbarContainer, Logo, NavIcon, NavMenu, NavItem, NavLinks, MobileIcon, NavItemBtn } from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);
    // const [btn, setBtn] = useState(true);

    const handleClick = () => setClick(!click);
    // const showBtn = () => {
    //     if (window.innerWidth <= 960) {
    //         setBtn(false);
    //     } else {
    //         setBtn(true);
    //     }
    // }

    // useEffect(() => {
    //     showBtn();
    // }, []);

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
                        <NavItemBtn>
                            {/* {btn ? (
                                <NavBtnLink to='/projects'>
                                    <Button primary>Contact</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/blog">
                                    <Button fontBig priary>Contact</Button>
                                </NavBtnLink>
                            )} */}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
