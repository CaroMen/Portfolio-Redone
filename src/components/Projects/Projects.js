import React from 'react';
import { Container } from '../../globalStyles';
import { ProjectsRow, ProjectsCol, ProjectTitle, ProjectsDiv, ImgContainerOne, ImgContainerTwo, ProjectDesc, ProjectOneBtn, ProjectTwoBtn, ProjectsIntroTitle, ProjectsIntroDesc, ProjectsIntro } from './Projects.elements';
import WanderHunt from '../../images/wanderhunt.png';
import SpireCamp from '../../images/spirecamp.png';

const AboutMe = ({ title1, project1desc, title2, project2desc, projects, projectsdesc }) => {
    return (
        <>
            <Container>
                <ProjectsRow>
                    <ProjectsIntro>
                        <ProjectsIntroTitle>{projects}</ProjectsIntroTitle>
                        <ProjectsIntroDesc>{projectsdesc}</ProjectsIntroDesc>
                    </ProjectsIntro>
                    <ProjectsCol>
                        <ProjectsDiv>
                            <ImgContainerOne src={WanderHunt} />
                            <ProjectTitle>{title1}</ProjectTitle>
                            <ProjectDesc>{project1desc}</ProjectDesc>
                            <ProjectOneBtn to="/wanderhunt">View Project ➡</ProjectOneBtn>
                        </ProjectsDiv>
                        <ProjectsDiv>
                            <ImgContainerTwo src={SpireCamp} />
                            <ProjectTitle>{title2}</ProjectTitle>
                            <ProjectDesc>{project2desc}</ProjectDesc>
                            <ProjectTwoBtn to="/spirecamp">View Project ➡</ProjectTwoBtn>
                        </ProjectsDiv>
                    </ProjectsCol>
                </ProjectsRow>
            </Container>
        </>
    )
}

export default AboutMe;
