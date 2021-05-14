import React from 'react';
import { Container } from '../../globalStyles';
import { ProjectsRow, ProjectsCol, ProjectTitle, ProjectsDiv, ImgContainer } from './Projects.elements';
import HeaderImg from '../../images/caro.jpg';

const AboutMe = ({ title }) => {
    return (
        <>
            <Container>
                <ProjectsRow>
                    <ProjectsCol>
                        <ProjectsDiv>
                            <ImgContainer src={HeaderImg} />
                            <ProjectTitle>{title}</ProjectTitle>
                        </ProjectsDiv>
                    </ProjectsCol>
                </ProjectsRow>
            </Container>
        </>
    )
}

export default AboutMe;
