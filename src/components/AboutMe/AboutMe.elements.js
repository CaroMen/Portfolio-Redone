import styled from 'styled-components';

export const AboutMeRow = styled.div`
display: flex;
margin: 50px -15px -15px -15px;
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
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`
export const TextWrapperInfo = styled.div`
max-width: 540px;
padding-top: 0px;
padding-bottom: 60px;

@media screen and (max-width: 768px) {
    padding-bottom: 125px;
    /* padding-top: 100px; */
}
`

export const HeadLine = styled.div`
color: #2E3630;
font-size: 22px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`;
