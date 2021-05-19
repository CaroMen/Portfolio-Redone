import React, { useEffect } from 'react';
import { Container } from '../../globalStyles';
import SpireCamp from '../../images/spirecamp-1.png'
import PicOne from '../../images/sp-1.png'
import PicTwo from '../../images/sp-2.png'
import { SPTitle, SPDesc, SPType, SPStack, SPSOne, SPSTwo, SPSThree, SPSFour, SPSFive, SPTechInfo, SPTypeTitle, SPStackTitle, SPLiveLink, SPLinkTitle, SPSiteLink, SPCode, SPCodeTitle, SPCodeLink, HomePageSP, SPPic, SPPurpose, SPPurposeTitle, SPPurposeParagraph, SPCodeStack, SPStackCodeTitle, SPStackParagraph, SPStackDiv, SPStackWrapper, Stack, SPLessons, SPLessonsTitle, SPLessonsParagraph, SPPics, SPPicOne, SPPicTwo, SPSSix, SPSSeven, SPSEight } from './SpireCamp.elements';

const WanderHunt = ({ title1, desc1, type1, stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, purpose1, stackchosen1, lessons1 }) => {

    useEffect(() => {
        window.scroll(0, 0)
    })

    return (
        <>
            <Container>
                <SPTitle>{title1}</SPTitle>
                <SPDesc>{desc1}</SPDesc>
                <SPTechInfo>
                    <SPType>
                        <SPTypeTitle>Type</SPTypeTitle>
                        {type1}
                    </SPType>
                    <SPStack>
                        <SPStackTitle>Stack</SPStackTitle>
                        <SPSOne>
                            {stack1}
                        </SPSOne>
                        <SPSTwo>
                            {stack2}
                        </SPSTwo>
                        <SPSThree>
                            {stack3}
                        </SPSThree>
                        <SPSFour>
                            {stack4}
                        </SPSFour>
                        <SPSFive>
                            {stack5}
                        </SPSFive>
                        <SPSSix>
                            {stack6}
                        </SPSSix>
                        <SPSSeven>
                            {stack7}
                        </SPSSeven>
                        <SPSEight>
                            {stack8}
                        </SPSEight>
                    </SPStack>
                    <SPLiveLink>
                        <SPLinkTitle>Take Me To The Site</SPLinkTitle>
                        <SPSiteLink href={"https://spirecamp.herokuapp.com/"}>Live Site</SPSiteLink>
                    </SPLiveLink>
                    <SPCode>
                        <SPCodeTitle>Show Me The Code</SPCodeTitle>
                        <SPCodeLink href={"https://github.com/CaroMen/SpireCamp"}>Repo</SPCodeLink>
                    </SPCode>
                </SPTechInfo>
                <HomePageSP>
                    <SPPic src={SpireCamp} />
                </HomePageSP>
                <SPPurpose>
                    <SPPurposeTitle>Project Purpose</SPPurposeTitle>
                    <SPPurposeParagraph>{purpose1}</SPPurposeParagraph>
                </SPPurpose>
                <SPCodeStack>
                    <SPStackWrapper>
                        <Stack>{stack1}</Stack>
                        <Stack>{stack2}</Stack>
                        <Stack>{stack3}</Stack>
                        <Stack>{stack4}</Stack>
                        <Stack>{stack5}</Stack>
                        <Stack>{stack6}</Stack>
                        <Stack>{stack7}</Stack>
                        <Stack>{stack8}</Stack>
                    </SPStackWrapper>
                    <SPStackDiv>
                        <SPStackCodeTitle>Project Stack</SPStackCodeTitle>
                        <SPStackParagraph>{stackchosen1}</SPStackParagraph>
                    </SPStackDiv>
                </SPCodeStack>
                <SPPics>
                    <SPPicOne src={PicOne} />
                    <SPPicTwo src={PicTwo} />
                </SPPics>
                <SPLessons>
                    <SPLessonsTitle>Lessons Learned</SPLessonsTitle>
                    <SPLessonsParagraph>{lessons1}</SPLessonsParagraph>
                </SPLessons>
            </Container>
        </>
    )
}

export default WanderHunt;
