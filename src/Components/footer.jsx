import React, {useContext} from 'react';
import { Button, ProgressBar } from 'react-bootstrap';

import {GymContext} from '../context'


import '../css/footer.css';

const Footer = () => {

    let context = useContext(GymContext)
    return (
        <>
            <div className='d-flex justify-content-center footer'>
                <Button size="lg" className='control-btn' variant="success" style={{ display: `${context.state.display}` }} onClick={context.runTimer} >START</Button>
                <Button size="lg" className='control-btn' variant="danger" onClick={context.reset}>RESET</Button>
            </div>
            <ProgressBar animated now={context.state.percent} label={`${Math.floor(context.state.percent)}%`} />
        </>
    )
}

export default React.memo(Footer);