import React from 'react';
import { Container } from '../../globalStyles';
import { HeaderRow, HeaderColumn, TextWrapper, TopLine, Heading } from './Header.elements';

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
            </HeaderRow>
        </Container>
    )
}

export default Header
