import React from 'react';
import Project from '../../components/WanderHunt/WanderHunt.js';
import { wanderhunt } from './Data';

const AboutMeInfo = () => {
    return (
        <>
            <Project {...wanderhunt} />
        </>
    )
}

export default AboutMeInfo
