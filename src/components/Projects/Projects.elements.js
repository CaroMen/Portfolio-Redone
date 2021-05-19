import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectsRow = styled.div`
display: flex;
margin: 250px -15px 0 -15px;
padding-bottom: 50px;
flex-wrap: wrap;
align-items: center;

@media screen and (max-width: 812px) {
    margin-top: 300px;
    padding-bottom: 200px;
    overflow: hidden;
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

@media screen and (max-width: 812px) {
    margin-left: 20px;
}
`
export const ProjectsDiv = styled.div`
display: flex;
flex-direction: column;
align-items: left;
padding-bottom: 80px;
border-radius: 5px;


@media screen and (max-width: 812px) {
    margin-bottom: -40px;
    margin-left: -10px;
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
    /* max-width: 370px; */
    /* max-width: 100%; */
    width: 100%;
    height: 100%;
    /* max-height: 330px; */
    margin: 0 auto;
    /* justify-content: center; */
    /* margin: 0 auto auto -25px; */
}
`;

export const ImgContainerTwo = styled.img`
width: 600px;
height: 458px;
margin-top: -3px;
margin-bottom: -20px;
margin-left: -35px;


@media screen and (max-width: 812px) {
    /* display: flex; */
    /* max-width: 380px; */
    /* max-height: 350px; */
    /* width: 600px; */
    width: 100%;
    height: 100%;
    margin: 0 auto;
    /* margin: 0 auto auto -25px; */
}
`;

export const ProjectDesc = styled.div`
font: 12px;
line-height: 1.2rem;
font-family: 'Lato', sans-serif;
font-weight: 300;
max-width: 90%;

@media screen and (max-width: 812px) {
    line-height: 1.6em;
    margin-left: 20px;
}
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

@media screen and (max-width: 812px) {
    margin-left: 20px;
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

@media screen and (max-width: 812px) {
    margin-left: 20px;
}
`
