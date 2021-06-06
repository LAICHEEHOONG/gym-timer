import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

import '../css/gymNav.css';

class GymNav extends Component {

    constructor(props) {
        super(props)

        this.textInput = React.createRef()
    }

    render() {

        console.log('nav')

        let { s, setTimer} = this.props;

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
                                s = event.target.value;
                                return s
                            }}
                        />
                        <Button variant="outline-success"
                            onClick={(e) => {
                                setTimer(e, s)
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