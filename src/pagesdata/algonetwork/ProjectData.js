import React from 'react';
import Project from '../../components/AlgoNetwork/AlgoNetwork.js';
import { algoinfo } from './Data';

const AlgoNetworkInfo = () => {
    return (
        <>
            <Project {...algoinfo} />
        </>
    )
}

export default AlgoNetworkInfo
