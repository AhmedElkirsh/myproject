import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as icon from 'react-bootstrap-icons'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {increase, decrease} from '../store/CounterSlice'



export default function FinalNavbar() {
  
  let count = useSelector((state)=>state.counter.count)
  

  let NavClass = ({isActive})=>{
    return `nav-link ${isActive? "border-bottom border-success border-3":""}` //adjust
  }
  return (
    
    <Navbar bg="secodary" expand='lg' className='py-3'>
    <Container>
        <Link to={'/home'} className='navbar-brand'>
          Logo
        </Link> 
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink to='home' className={NavClass}>Home</NavLink>
          <NavLink to='AboutUs' className={NavClass}>About</NavLink>
          <NavLink to='shop' className={NavClass}>Shop</NavLink>
          <NavLink to='TaskThree' className={NavClass}>Task3</NavLink>
          
          <button type="button" className="btn btn-success position-relative rounded-0 ms-3">
             <div className='d-flex gap-2'>
              <icon.CartFill color='white' size={15} className='align-self-center'/>
              <span>Cart</span>
             </div>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {count}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
