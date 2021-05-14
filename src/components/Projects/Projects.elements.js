import styled from 'styled-components';

export const ProjectsRow = styled.div`
display: flex;
margin: 250px -15px 0 -15px;
padding-bottom: 50px;
flex-wrap: wrap;
align-items: center;
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

/* @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
} */
`

export const ProjectTitle = styled.div`
font-size: 35px;
font-family: 'Montserrat', sans-serif;
`
export const ProjectsDiv = styled.div`
display: flex;
flex-direction: column;
align-items: left;
/* background-color: #F8F8FF; */
/* padding-left: 10px; */
/* padding-right: 10px; */
/* margin-right: 40px; */
padding-bottom: 80px;
border-radius: 5px;
/* box-shadow:
    0 2px 2px rgba(0, 0, 0, 0.034),
    0 6px 5px rgba(0, 0, 0, 0.048); */
    /* 0 12px 10px rgba(0, 0, 0, 0.06); */
    /* 0 22px 17px rgba(0, 0, 0, 0.052); */
`;

export const ImgContainerOne = styled.img`
width: 600px;
height: 450px;
margin-bottom: -20px;
margin-left: -35px;
`;

export const ImgContainerTwo = styled.img`
width: 600px;
height: 458px;
margin-top: -3px;
margin-bottom: -20px;
margin-left: -35px;
`;

export const ProjectDesc = styled.div`
font: 12px;
line-height: 1.2rem;
font-family: 'Lato', sans-serif;
font-weight: 300;
max-width: 90%;
`
