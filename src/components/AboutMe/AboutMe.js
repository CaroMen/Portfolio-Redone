import React from 'react';
import { Container } from '../../globalStyles';
import DeskImg from '../../images/desk.jpg';
import { AboutMeRow, AboutMeCol, TextWrapperInfo, HeadLine, Paragraph, SkillsList, Skill, SkillsHeader, ImgAboutMe, ImgDiv, Wrapper, SkillsDiv, SkillsWrapper } from './AboutMe.elements';

const AboutMe = ({ headline, pOne, skillOne, skillTwo, skillThree, skillFour, skillFive, skillSix, skillSeven, skillEight, skillNine, skillTen, skillEleven, skillsheader }) => {
    return (
        <>
            <Container>
                <AboutMeRow>
                    <AboutMeCol>
                        <TextWrapperInfo>
                            <HeadLine>{headline}</HeadLine>
                            <Paragraph>{pOne}</Paragraph>
                        </TextWrapperInfo>
                        <SkillsDiv>
                            <ImgAboutMe src={DeskImg}></ImgAboutMe>
                            <SkillsList>
                                <SkillsHeader>{skillsheader}</SkillsHeader>
                                <SkillsWrapper>
                                    <Skill>{skillOne}</Skill>
                                    <Skill>{skillTwo}</Skill>
                                    <Skill>{skillThree}</Skill>
                                    <Skill>{skillFour}</Skill>
                                    <Skill>{skillFive}</Skill>
                                    <Skill>{skillSix}</Skill>
                                    <Skill>{skillSeven}</Skill>
                                    <Skill>{skillEight}</Skill>
                                    <Skill>{skillNine}</Skill>
                                    <Skill>{skillTen}</Skill>
                                    <Skill>{skillEleven}</Skill>
                                </SkillsWrapper>
                            </SkillsList>
                        </SkillsDiv>
                    </AboutMeCol>
                    <AboutMeCol>

                    </AboutMeCol>
                </AboutMeRow>
            </Container>
        </>
    )
}

export default AboutMe;
