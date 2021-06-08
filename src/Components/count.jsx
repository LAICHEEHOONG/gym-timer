import React, {useContext} from 'react';

import {GymContext} from '../context'


import '../css/count.css';

const Count = () => {

    let context = useContext(GymContext)

    return (
        <div className='count'
        style={{marginLeft: '9px'}}
        >{context.state.count}<span style={{fontSize: '1rem'}} >Times</span></div>
    )
}

export default React.memo(Count);

