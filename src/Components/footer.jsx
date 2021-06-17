import React, { useContext, useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import { GymContext } from '../context'
import { CSSTransition } from 'react-transition-group';


import '../css/footer.css';

const Footer = () => {

    let context = useContext(GymContext)

    // const [click, setClick] = useState(false)

    const percentageToBool = () => {
        let percent = context.state.percent;
        if(percent === 100 || percent === 0) {
            return false
        } else {
            return true
        }
    }

    ;

    return (
        <>
            <div className='d-flex justify-content-center footer'>
                <Button size="lg" className='control-btn' variant="success" style={{ display: `${context.state.display}` }} onClick={context.runTimer} >START</Button>
                <Button size="lg" className='control-btn' variant="danger" onClick={context.reset}>RESET</Button>
            </div>

            <CSSTransition in={percentageToBool()} timeout={1000} classNames='progress-bar'>
                <ProgressBar animated now={context.state.percent} label={`${Math.floor(context.state.percent)}%`} />
            </CSSTransition>

        </>
    )
}

export default React.memo(Footer);