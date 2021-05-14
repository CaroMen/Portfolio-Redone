import React from 'react';
import { Container } from '../../globalStyles';
import { ProjectsRow, ProjectsCol, ProjectTitle, ProjectsDiv, ImgContainer } from './Projects.elements';
import WanderHunt from '../../images/wanderhunt.png';

const AboutMe = ({ title }) => {
    return (
        <>
            <Container>
                <ProjectsRow>
                    <ProjectsCol>
                        <ProjectsDiv>
                            <ImgContainer src={WanderHunt} />
                            <ProjectTitle>{title}</ProjectTitle>
                        </ProjectsDiv>
                        <ProjectsDiv>
                            <ImgContainer src={WanderHunt} />
                            <ProjectTitle>{title}</ProjectTitle>
                        </ProjectsDiv>
                    </ProjectsCol>
                </ProjectsRow>
            </Container>
        </>
    )
}

export default AboutMe;
