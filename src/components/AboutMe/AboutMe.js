import React from 'react';
import { Container } from '../../globalStyles';
import { AboutMeRow, AboutMeCol, TextWrapperInfo, HeadLine, Paragraph } from './AboutMe.elements';

const AboutMe = ({ headline, pOne }) => {
    return (
        <>
            <Container>
                <AboutMeRow>
                    <AboutMeCol>
                        <TextWrapperInfo>
                            <HeadLine>{headline}</HeadLine>
                            <Paragraph>{pOne}</Paragraph>
                        </TextWrapperInfo>
                    </AboutMeCol>
                </AboutMeRow>
            </Container>
        </>
    )
}

export default AboutMe;
