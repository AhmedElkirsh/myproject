import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useContext} from 'react'
import * as icon from 'react-bootstrap-icons'
import { CounterContext } from '../context/counterContext';


    // or use props in parameter... call props using props.data or props.content
    // note that there is no this. because we're using a function not a class

export default function FunctionNavbar(props) {
    
  let datafromcontext= useContext(CounterContext) 

  return (
    
    <Navbar bg="secondary" expand='lg' className='py-3'>
    <Container>
      <Navbar.Brand href="#home" className='h2'>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Shop</Nav.Link>
          <button type="button" className="btn btn-success position-relative rounded-0 ms-3">
             <div className='d-flex gap-2'>
              <icon.CartFill color='white' size={15} className='align-self-center'/>
              <span>Cart</span>
             </div>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {datafromcontext.counter}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
