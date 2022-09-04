import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/quicklogo.png'
import React, { Component } from 'react'

export default class MyNav extends Component {
  render() {
    return (
      <Navbar bg="light" expand='lg'>
          <Container>
            <Navbar.Brand href="#home"><img src={logo} width='15%'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Cart</Nav.Link>
                <button className=' btn btn-outline-warning rounded-2 px-3 text-uppercase ms-2'><a>Shop</a></button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
  }
}