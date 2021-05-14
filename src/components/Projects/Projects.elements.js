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
font-size: 20px;
font-family: 'Montserrat', sans-serif;
`
export const ProjectsDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #F5F5F5;
padding-left: 10px;
padding-right: 10px;
margin-right: 30px;
padding-bottom: 80px;
border-radius: 5px;
box-shadow:
    0 2px 2px rgba(0, 0, 0, 0.034),
    0 6px 5px rgba(0, 0, 0, 0.048),
    0 12px 10px rgba(0, 0, 0, 0.06),
    0 22px 17px rgba(0, 0, 0, 0.052);
`;

export const ImgContainer = styled.img`
width: 100%;
height: 100%;
display: flex;
margin-bottom: -20px;
/* border-radius: 10px; */
`
