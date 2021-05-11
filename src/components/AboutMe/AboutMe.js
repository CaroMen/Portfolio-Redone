import React from 'react';
import { Container } from '../../globalStyles';
import { AboutMeRow, AboutMeCol, TextWrapperInfo, HeadLine } from './AboutMe.elements';

const AboutMe = ({ headline }) => {
    return (
        <>
            <Container>
                <AboutMeRow>
                    <AboutMeCol>
                        <TextWrapperInfo>
                            <HeadLine>{headline}</HeadLine>
                        </TextWrapperInfo>
                    </AboutMeCol>
                </AboutMeRow>
            </Container>
        </>
    )
}

export default AboutMe;
