import React from 'react'
import logo from '../../logo-navbar.png';
import logoText from "../../rainbow.png"
import {Navbar, Container, Nav, Row, Col, Button} from "react-bootstrap";

function navbar() {
  return (
            <div className='cover'>
                <Container >
                    <Row className='navbar'>
                        <Navbar>
                            <Container >
                                <Navbar.Brand href="#home" className="navbar-logo">
                                <img src={logo}  alt="logo" />
                                <img src={logoText} alt="logo"/>
                                </Navbar.Brand>
                                <Nav className="justify-content-end nav-link">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Services</Nav.Link>
                                    <Nav.Link href="#pricing">Portfolio</Nav.Link>
                                    <Nav.Link href="#pricing">About</Nav.Link>
                                    <Nav.Link href="#pricing">Contact</Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </Row>
                    <Row  className='nav-body'>
                        <Col xs={12}><h1 >Wellcome To Our Studio!</h1></Col>
                        <Col xs={12}><h2 >IT'S NİCE TO MEET YOU</h2></Col>
                        <Col><Button>TELL ME MORE</Button></Col>
                    </Row>
                </Container>
            </div>
  )
}

export default React.memo(navbar);