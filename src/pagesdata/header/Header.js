import React from 'react';
import Header from '../../components/IntroSection/Header';
import { headerInfo } from './Data';

const HeaderInfo = () => {
    return (
        <>
            {/* <InfoSection {...homeObjOne} /> */}
            <Header {...headerInfo} />
        </>
    )
}

export default HeaderInfo
