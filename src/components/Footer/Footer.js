import React from 'react';
import { FooterContainer, WebsiteRights, SocialIcons, SocialStarter, SocialIconLink } from './Footer.elements';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <FooterContainer>
            <WebsiteRights>Made with 💜 by Caro </WebsiteRights>
            <SocialIcons>
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
        </FooterContainer>
    )
}

export default Footer
