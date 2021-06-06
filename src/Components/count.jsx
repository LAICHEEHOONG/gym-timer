import React from 'react';

import '../css/count.css';

const Count = ({ timer: { count } }) => {
    console.log('count')
    return (
        <div className='count'
        style={{marginLeft: '9px'}}
        >{count}<span style={{fontSize: '1rem'}} >Times</span></div>
    )
}

export default React.memo(Count);