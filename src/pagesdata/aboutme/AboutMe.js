import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import { aboutMeInfo } from './Data';

const AboutMeInfo = () => {
    return (
        <>
            {/* <InfoSection {...homeObjOne} /> */}
            <AboutMe {...aboutMeInfo} />
        </>
    )
}

export default AboutMeInfo
