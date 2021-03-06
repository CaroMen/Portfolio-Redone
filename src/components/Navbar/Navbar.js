import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavbarContainer, Logo, NavIcon, NavMenu, NavItem, NavLinks, MobileIcon, NavItemBtn, TechGuide } from './Navbar.elements';

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
                    <Logo to="/">
                        <NavIcon />
                        CARO.
                    </Logo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <TechGuide href='https://shrouded-prawn-19d.notion.site/DSAs-and-Trivia-a0f1aad01bbb4bc39d4c299f9ab06494' target="_blank">
                                Tech Interview Guide
                            </TechGuide>
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
