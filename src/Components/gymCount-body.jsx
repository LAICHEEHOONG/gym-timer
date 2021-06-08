import React from 'react';

import Timer from './timer';
import Count from './count';


const GymCountTimer = () => {

    return (
    <>
        <div className='d-flex justify-content-center'>
            <Timer  />
        </div>
        
        <div className='d-flex justify-content-center'>
            <Count />
        </div>
    </>
    )

}

export default React.memo(GymCountTimer);
