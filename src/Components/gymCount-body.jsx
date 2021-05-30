import React from 'react';

import Timer from './timer';
import Count from './count';


const GymCountTimer = ({ timer }) => {



    return (
    <>
        <div className='d-flex justify-content-center'>
            <Timer timer={timer} />
        </div>
        
        <div className='d-flex justify-content-center'>
            <Count timer={timer}/>
        </div>
    </>
    )

}

export default GymCountTimer;
