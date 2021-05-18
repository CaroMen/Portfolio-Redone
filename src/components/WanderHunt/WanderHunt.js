import React from 'react';
import { Container } from '../../globalStyles';
import { WHTitle, WHDesc, WHType, WHStack, WHSOne, WHSTwo, WHSThree, WHSFour, WHTechInfo, TypeTitle, StackTitle } from './WanderHunt.elements';

const WanderHunt = ({ title1, desc1, type1, stack1, stack2, stack3, stack4 }) => {
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
                    </WHStack>
                </WHTechInfo>
                {/* <WHSCode></WHSCode> */}
            </Container>
        </>
    )
}

export default WanderHunt;
