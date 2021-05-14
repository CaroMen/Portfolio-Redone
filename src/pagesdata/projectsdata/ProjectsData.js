import React from 'react';
import Project from '../../components/Projects/Projects';
import { projectOne } from './Data';

const AboutMeInfo = () => {
    return (
        <>
            <Project {...projectOne} />
        </>
    )
}

export default AboutMeInfo
