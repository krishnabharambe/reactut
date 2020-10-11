import React, { Component } from 'react'
import {Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap'
export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">React Crud Test With Django</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Crud</Nav.Link>
                        <Nav.Link href="#features">Login/Register</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
