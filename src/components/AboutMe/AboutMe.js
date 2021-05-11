import React from 'react';
import { Container } from '../../globalStyles';
import { AboutMeRow, AboutMeCol, TextWrapperInfo, HeadLine, Paragraph, SkillsList, Skill } from './AboutMe.elements';

const AboutMe = ({ headline, pOne, skillOne, skillTwo, skillThree, skillFour, skillFive, skillSix, skillSeven }) => {
    return (
        <>
            <Container>
                <AboutMeRow>
                    <AboutMeCol>
                        <TextWrapperInfo>
                            <HeadLine>{headline}</HeadLine>
                            <Paragraph>{pOne}</Paragraph>
                        </TextWrapperInfo>
                        <SkillsList>
                            <Skill>{skillOne}</Skill>
                            <Skill>{skillTwo}</Skill>
                            <Skill>{skillThree}</Skill>
                            <Skill>{skillFour}</Skill>
                            <Skill>{skillFive}</Skill>
                            <Skill>{skillSix}</Skill>
                            <Skill>{skillSeven}</Skill>
                        </SkillsList>
                    </AboutMeCol>
                </AboutMeRow>
            </Container>
        </>
    )
}

export default AboutMe;
