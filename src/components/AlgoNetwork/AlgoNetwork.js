import React, { useEffect } from 'react';
import { Container } from '../../globalStyles';
import HomePic from '../../images/homepage.png'
import PicTwo from '../../images/problempage.png'
import { ANTitle, ANDesc, ANType, ANStack, ANOne, ANTwo, ANThree, ANFour, ANFive, ANTechInfo, TypeTitle, StackTitle, ANLiveLink, LinkTitle, SiteLink, ANCode, CodeTitle, CodeLink, HomePageAN, ANPic, ANPurpose, PurposeTitle, PurposeParagraph, ANCodeStack, StackCodeTitle, StackParagraph, StackDiv, StackWrapper, Stack, ANLessons, LessonsTitle, LessonsParagraph, ANPics, ANPicTwo } from './AlgoNetwork.elements';

const AlgoNetwork = ({ title1, desc1, type1, stack1, stack2, stack3, stack4, stack5, purpose1, stackchosen1, lessons1 }) => {

    useEffect(() => {
        window.scroll(0, 0)
    })

    return (
        <>
            <Container>
                <ANTitle>{title1}</ANTitle>
                <ANDesc>{desc1}</ANDesc>
                <ANTechInfo>
                    <ANType>
                        <TypeTitle>Type</TypeTitle>
                        {type1}
                    </ANType>
                    <ANStack>
                        <StackTitle>Stack</StackTitle>
                        <ANOne>
                            {stack1}
                        </ANOne>
                        <ANTwo>
                            {stack2}
                        </ANTwo>
                        <ANThree>
                            {stack3}
                        </ANThree>
                        <ANFour>
                            {stack4}
                        </ANFour>
                        <ANFive>
                            {stack5}
                        </ANFive>
                    </ANStack>
                    <ANLiveLink>
                        <LinkTitle>Take Me To The Site</LinkTitle>
                        <SiteLink href={"https://wanderhunt.herokuapp.com/"}>Live Site</SiteLink>
                    </ANLiveLink>
                    <ANCode>
                        <CodeTitle>Show Me The Code</CodeTitle>
                        <CodeLink href={"https://github.com/CaroMen/WanderHunt"}>Repo</CodeLink>
                    </ANCode>
                </ANTechInfo>
                <HomePageAN>
                    <ANPic src={HomePic} />
                </HomePageAN>
                <ANPurpose>
                    <PurposeTitle>Project Purpose</PurposeTitle>
                    <PurposeParagraph>{purpose1}</PurposeParagraph>
                </ANPurpose>
                <ANCodeStack>
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
                </ANCodeStack>
                <ANPics>
                    <ANPicTwo src={PicTwo} />
                </ANPics>
                <ANLessons>
                    <LessonsTitle>Lessons Learned</LessonsTitle>
                    <LessonsParagraph>{lessons1}</LessonsParagraph>
                </ANLessons>
            </Container>
        </>
    )
}

export default AlgoNetwork;
