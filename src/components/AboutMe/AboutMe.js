import React from 'react';
import { Container } from '../../globalStyles';
import DeskImg from '../../images/desk.jpg';
import { AboutMeRow, AboutMeCol, TextWrapperInfo, HeadLine, Paragraph, SkillsList, Skill, SkillsHeader, ImgAboutMe, ImgDiv, Wrapper, SkillsDiv, SkillsWrapper } from './AboutMe.elements';

const AboutMe = ({ headline, pOne, skillOne, skillTwo, skillThree, skillFour, skillFive, skillSix, skillSeven, skillEight, skillNine, skillTen, skillEleven, skill12, skill13, skill14, skill15, skill16, skill17, skillsheader }) => {
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
                                    <Skill>{skill12}</Skill>
                                    <Skill>{skill13}</Skill>
                                    <Skill>{skill14}</Skill>
                                    <Skill>{skill15}</Skill>
                                    <Skill>{skill16}</Skill>
                                    <Skill>{skill17}</Skill>
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
