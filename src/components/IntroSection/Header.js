import React from 'react';
import { Container } from '../../globalStyles';
import HeaderImg from '../../images/caro.jpg';
import { HeaderRow, HeaderColumn, TextWrapper, TopLine, Heading, ImgWrapper, Img } from './Header.elements';

const Header = ({ headerImg, top, headline }) => {
    return (
        <Container>
            <HeaderRow img={headerImg}>
                <HeaderColumn>
                    <TextWrapper>
                        <TopLine>{top}</TopLine>
                        <Heading>{headline}</Heading>
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
