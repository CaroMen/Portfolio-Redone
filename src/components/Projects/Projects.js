import React from 'react';
import { Container } from '../../globalStyles';
import { ProjectsRow, ProjectsCol, ProjectTitle, ProjectsDiv, ImgContainerOne, ImgContainerTwo, ProjectDesc } from './Projects.elements';
import WanderHunt from '../../images/wanderhunt.png';
import SpireCamp from '../../images/spirecamp.png';

const AboutMe = ({ title1, project1desc, title2, project2desc }) => {
    return (
        <>
            <Container>
                <ProjectsRow>
                    <ProjectsCol>
                        <ProjectsDiv>
                            <ImgContainerOne src={WanderHunt} />
                            <ProjectTitle>{title1}</ProjectTitle>
                            <ProjectDesc>{project1desc}</ProjectDesc>
                        </ProjectsDiv>
                        <ProjectsDiv>
                            <ImgContainerTwo src={SpireCamp} />
                            <ProjectTitle>{title2}</ProjectTitle>
                            <ProjectDesc>{project2desc}</ProjectDesc>
                        </ProjectsDiv>
                    </ProjectsCol>
                </ProjectsRow>
            </Container>
        </>
    )
}

export default AboutMe;
