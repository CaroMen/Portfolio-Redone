import styled from 'styled-components';

export const AboutMeRow = styled.div`
display: flex;
margin: 300px -15px -15px -15px;
flex-wrap: wrap;
align-items: center;

@media screen and (max-width: 768px) {
    /* margin-top: -100px; */
}
`

export const AboutMeCol = styled.div`
margin-bottom: -205px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media screen and (max-width: 768px) {
    /* width: 50%; */
    /* flex-basis: 40%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
}
`
export const TextWrapperInfo = styled.div`
max-width: 540px;
padding-top: 0px;
padding-bottom: 60px;

@media screen and (max-width: 768px) {
    /* padding-bottom: 125px; */
    /* padding-top: 100px; */
    /* display: flex; */
    /* max-width: 500px; */
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
}
`

export const HeadLine = styled.div`
font-family: 'Montserrat', sans-serif;
font-weight: 800;
font-size: 50px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;

@media screen and (max-width: 768px) {
    font-size: 30px;

    /* flex-basis: 100%; */
    /* display: flex; */
    /* justify-content: center; */
}
`;

export const Paragraph = styled.div`
margin-top: 30px;
width: 1200px;
font-size: 18px;
line-height: 1.8em;
/* color: black; */
font-family: 'Lato', sans-serif;
font-weight: 300;
column-count: 2;

@media screen and (max-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
    column-count: 1;
}
`;

export const SkillsList = styled.div`
display: flex;
list-style: none;
flex-wrap: wrap;
margin-bottom: 50px;
flex-direction: column;
/* justify-content: flex-end; */

@media screen and (max-width: 768px) {
    max-width: 400px;
    flex-wrap: wrap;
    padding-bottom: -50px;
    margin-bottom: 30px;
}
`

export const Skill = styled.li`
font-size: 17px;
padding: 8px 15px 8px 15px;
background-color: #f1f1f1;
margin-right: 10px;
border-radius: 5px;
box-shadow:
    0 2px 2px rgba(0, 0, 0, 0.034),
    0 6px 5px rgba(0, 0, 0, 0.048);
margin-top: 15px;
font-family: 'Open Sans', sans-serif;

@media screen and (max-width: 768px) {
    margin-bottom: -2px;
}
`

export const SkillsHeader = styled.div`
font-size: 40px;
color: #2E3630;
font-family: 'Montserrat', sans-serif;
font-weight: 800;

@media screen and (max-width: 768px) {
    font-size: 30px;
}
`;

export const ImgDiv = styled.div`
margin-bottom: -205px;
padding-right: 15px;
padding-left: 15px;
/* flex: 2; */
/* max-width: 50%; */
/* flex-basis: 50%; */

@media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;

export const Wrapper = styled.div`
max-width: 555px;
/* display: flex; */
/* justify-content: flex-end; */
`

export const ImgAboutMe = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 600px;
border-radius: 5px;
box-shadow:
    0 2px 2px rgba(0, 0, 0, 0.034),
    0 6px 5px rgba(0, 0, 0, 0.048),
    0 12px 10px rgba(0, 0, 0, 0.06),
    0 22px 17px rgba(0, 0, 0, 0.052);

@media screen and (max-width: 768px) {
    margin-top: 105px;
    margin-bottom: 50px;
}
`
export const SkillsDiv = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 50px;
/* justify-content: space-between; */
`;
