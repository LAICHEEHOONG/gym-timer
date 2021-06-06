import React from 'react';



import '../css/timer.css'

const Timer = ({timer: {s, ms}}) => {


    return (
        <div>
            <span className='seconds'>{s}</span>
            <span>s</span>
            <span className='millisecond'>   {ms}</span>
           
        </div>
    )
}

export default React.memo(Timer);