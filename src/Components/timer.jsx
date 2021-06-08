import React, {useContext} from 'react';

import {GymContext} from '../context'

import '../css/timer.css'

const Timer = () => {

    let context = useContext(GymContext)
    return (
        <div>
            <span className='seconds'>{context.state.s}</span>
            <span>s</span>
            <span className='millisecond'>   {context.state.ms}</span>
        </div>
    )
}

export default React.memo(Timer);