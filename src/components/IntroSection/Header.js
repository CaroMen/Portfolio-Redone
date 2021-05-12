import React from 'react';
import { Container } from '../../globalStyles';
import HeaderImg from '../../images/caro.jpg';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HeaderRow, HeaderColumn, TextWrapper, TopLine, Heading, ImgWrapper, Img, SocialIconLink, SocialIcons, SocialStarter, SubText } from './Header.elements';

const Header = ({ headerImg, top, headline, subtext }) => {
    return (
        <Container>
            <HeaderRow img={headerImg}>
                <HeaderColumn>
                    <TextWrapper>
                        <TopLine>{top}</TopLine>
                        <Heading>{headline}</Heading>
                        <SubText>{subtext}</SubText>
                        <SocialIcons>
                            <SocialStarter>
                                ______________________
                            </SocialStarter>
                            <SocialIconLink href={"https://www.instagram.com/notcxro/"} target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href={"https://www.linkedin.com/in/caroline-mendez-41a181134/"} target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href={"https://github.com/CaroMen"} target="_blank" aria-label="GitHub">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </TextWrapper>
                </HeaderColumn>
                <HeaderColumn>
                    <ImgWrapper>
                        <Img src={HeaderImg}></Img>
                    </ImgWrapper>
                </HeaderColumn>
            </HeaderRow>
        </Container>
    )
}

export default Header
