import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';


import {GymContext} from '../context/index'

import '../css/gymNav.css';

class GymNav extends Component {

    static contextType = GymContext

    constructor(props) {
        super(props)

        this.textInput = React.createRef()
    }

    render() {


        return (
            <Navbar bg="light" expand="lg"  >
                <Navbar.Brand className='navbar-brand ' href="#">Gym Timer</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >

                    <Form className="d-flex">
                        <FormControl
                            ref={this.textInput}
                            type="number"
                            placeholder="Seconds"
                            className="mr-2 search-bar"
                            aria-label="Timer"
                            onChange={(event) => {
                                this.context.state.s = event.target.value;
                                return this.context.state.s 
                            }}
                        />
                        <Button variant="outline-success"
                            onClick={(e) => {
                                this.context.setTimer(e, this.context.state.s )
                                this.textInput.current.value = '';
                            }}

                        >Set Timer</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default React.memo(GymNav);