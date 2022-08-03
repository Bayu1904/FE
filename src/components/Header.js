import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import LogoBrand from '../assets/logo-brand.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={LogoBrand}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="logo brand"
                    />
                </Navbar.Brand>

                <Form className="d-flex">
                    <Button variant="outline-danger" className='px-4'>Login</Button>
                    <Button variant="danger" className='px-4 ms-2'>Register</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default Header;