import styled from 'styled-components';

export const FooterContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 120px;
background-color: #F5F5F5;

@media screen and (max-width: 812px) {
    display: flex;
    flex-direction: row;
    width: 100%;
}
`;

export const WebsiteRights = styled.small`
color: #101522;
padding-bottom: 25px;
font-size: 15px;
margin-top: 25px;
font-family: 'Lato', sans-serif;
margin-left: 294px;

@media screen and (max-width: 812px) {
    width: 80%;
    margin-left: 10px;
}
`

export const SocialIconLink = styled.a`
color: #b284be;
font-size: 24px;
margin-left: 20px;
@media screen and (max-width: 812px) {
    margin-right: 4px;
    font-size: 18px;
    width: 50%;
}
`;

export const SocialIcons = styled.div`
display: flex;
align-items: center;
width: 400px;

@media screen and (max-width: 812px) {
    max-width: 40%;
}
`;
