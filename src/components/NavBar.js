import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navig = () => {
    return(
        <Navbar className='Navigation' bg='light' expand="lg" fixed='top'>
            <Navbar.Brand href="#home">Kumar Harsh</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='Navbar-Toggle'/>
            <Navbar.Collapse className="justify-content-end Navbar-Collapse" >
                <Nav className='justify-content-end Navbar-Nav'>
                    <Nav.Link className='Nav-Link' href="#home">HOME</Nav.Link>
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#skills">SKILLS</Nav.Link>
                    <Nav.Link href="#experience">EXPERIENCE</Nav.Link>
                    <Nav.Link href="#contact">Say hi!</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navig;