import { computeHeadingLevel } from '@testing-library/dom';
import React from 'react';

import '../css/count.css';

const Count = ({timer: {count}}) => {

    return (
        <div className='count'>
            {count}
        </div>
    )
}

export default Count;