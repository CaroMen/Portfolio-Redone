import React from 'react';
import Project from '../../components/SpireCamp/SpireCamp.js';
import { spirecamp } from './Data';

const AboutMeInfo = () => {
    return (
        <>
            <Project {...spirecamp} />
        </>
    )
}

export default AboutMeInfo
