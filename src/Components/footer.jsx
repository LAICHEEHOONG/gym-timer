import React from 'react';
import {Button, ProgressBar} from 'react-bootstrap';


import '../css/footer.css';

const Footer = ({run, reset, percent, display}) => {




    return (
        <>
        <div className='d-flex justify-content-center footer'>
            <Button className='control-btn' variant="success" style={{display: `${display}`}} onClick={run} >START</Button>
            <Button className='control-btn' variant="danger" onClick={reset}>RESET</Button>
        </div>
        <ProgressBar animated now={percent} label={`${Math.floor(percent)}%`}/>
        </>
    )
}

export default Footer;