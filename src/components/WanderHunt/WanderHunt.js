import React from 'react';
import { Container } from '../../globalStyles';
import HomePic from '../../images/wh-home.png'
import { WHTitle, WHDesc, WHType, WHStack, WHSOne, WHSTwo, WHSThree, WHSFour, WHSFive, WHTechInfo, TypeTitle, StackTitle, WHLiveLink, LinkTitle, SiteLink, WHCode, CodeTitle, CodeLink, HomePageWH, WHPic, WHPurpose, PurposeTitle, PurposeParagraph, WHCodeStack, StackCodeTitle, StackParagraph, StackDiv, StackWrapper, Stack } from './WanderHunt.elements';

const WanderHunt = ({ title1, desc1, type1, stack1, stack2, stack3, stack4, stack5, purpose1, stackchosen1 }) => {
    return (
        <>
            <Container>
                <WHTitle>{title1}</WHTitle>
                <WHDesc>{desc1}</WHDesc>
                <WHTechInfo>
                    <WHType>
                        <TypeTitle>Type</TypeTitle>
                        {type1}
                    </WHType>
                    <WHStack>
                        <StackTitle>Stack</StackTitle>
                        <WHSOne>
                            {stack1}
                        </WHSOne>
                        <WHSTwo>
                            {stack2}
                        </WHSTwo>
                        <WHSThree>
                            {stack3}
                        </WHSThree>
                        <WHSFour>
                            {stack4}
                        </WHSFour>
                        <WHSFive>
                            {stack5}
                        </WHSFive>
                    </WHStack>
                    <WHLiveLink>
                        <LinkTitle>Take Me To The Site</LinkTitle>
                        <SiteLink href={"https://wanderhunt.herokuapp.com/"}>Live Site</SiteLink>
                    </WHLiveLink>
                    <WHCode>
                        <CodeTitle>Show Me The Code</CodeTitle>
                        <CodeLink href={"https://github.com/CaroMen/WanderHunt"}>Repo</CodeLink>
                    </WHCode>
                </WHTechInfo>
                <HomePageWH>
                    <WHPic src={HomePic} />
                </HomePageWH>
                <WHPurpose>
                    <PurposeTitle>Project Purpose</PurposeTitle>
                    <PurposeParagraph>{purpose1}</PurposeParagraph>
                </WHPurpose>
                <WHCodeStack>
                    <StackWrapper>
                        <Stack>{stack1}</Stack>
                        <Stack>{stack2}</Stack>
                        <Stack>{stack3}</Stack>
                        <Stack>{stack4}</Stack>
                        <Stack>{stack5}</Stack>
                    </StackWrapper>
                    <StackDiv>
                        <StackCodeTitle>Project Stack</StackCodeTitle>
                        <StackParagraph>{stackchosen1}</StackParagraph>
                    </StackDiv>
                </WHCodeStack>
            </Container>
        </>
    )
}

export default WanderHunt;
