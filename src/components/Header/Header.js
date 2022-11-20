import React, { useState, useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { newContext } from '../Context/Context';
import './index.css'

function Header() {
  const { list, userLogin, userInfo, setuserInfo } = useContext(newContext)

  useEffect(() => {
    setuserInfo(JSON.parse(localStorage.getItem('user')))
  }, [])

  window.onunload = () => {
    // Clear the local storage
    window.localStorage.clear()
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container fluid className='d-flex '>
        <Navbar.Brand>  Result Search :{list.length}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="ml-auto margin-l"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <div className='d-flex mx-3'>
              
            </div>
            {!userLogin&&<Link to='/login' className='text-light tex-dir-none'>Login</Link>}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;