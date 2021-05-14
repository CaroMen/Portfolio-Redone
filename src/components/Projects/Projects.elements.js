import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectsRow = styled.div`
display: flex;
margin: 250px -15px 0 -15px;
padding-bottom: 50px;
flex-wrap: wrap;
align-items: center;

@media screen and (max-width: 812px) {
    /* display: flex; */
    /* width: 50%; */
    margin-top: 300px;
    overflow-x: hidden;
}
`;

export const ProjectsCol = styled.div`
margin-bottom: -205px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
/* max-width: 50%; */
flex-basis: 50%;
display: flex;
flex-direction: row;
justify-content: space-between;


@media screen and (max-width: 812px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
`

export const ProjectTitle = styled.div`
font-size: 35px;
font-family: 'Montserrat', sans-serif;
`
export const ProjectsDiv = styled.div`
display: flex;
flex-direction: column;
align-items: left;
padding-bottom: 80px;
border-radius: 5px;


@media screen and (max-width: 812px) {
    display: flex;
    width: 100%;
}
`;

export const ImgContainerOne = styled.img`
width: 600px;
height: 450px;
margin-bottom: -20px;
margin-left: -35px;

@media screen and (max-width: 812px) {
    display: flex;
    /* padding-right: 20px; */
    max-width: 380px;
    max-height: 350px;
}
`;

export const ImgContainerTwo = styled.img`
width: 600px;
height: 458px;
margin-top: -3px;
margin-bottom: -20px;
margin-left: -35px;


@media screen and (max-width: 812px) {
    display: flex;
    max-width: 380px;
    max-height: 350px;
    /* width: 600px; */
}
`;

export const ProjectDesc = styled.div`
font: 12px;
line-height: 1.2rem;
font-family: 'Lato', sans-serif;
font-weight: 300;
max-width: 90%;
`
export const ProjectOneBtn = styled(Link)`
color: #101522;
/* justify-self: flex-start; */
cursor: pointer;
text-decoration: none;
font-size: 20px;
display: flex;
align-items: left;
margin-top: 30px;
font-family: 'Lato', sans-serif;


&:hover {
    transform: translateY(-0.25em);
}
`
export const ProjectTwoBtn = styled(Link)`
color: #101522;
/* justify-self: flex-start; */
cursor: pointer;
text-decoration: none;
font-size: 20px;
display: flex;
align-items: left;
margin-top: 30px;
font-family: 'Lato', sans-serif;

&:hover {
    transform: translateY(-0.25em);
}
`
