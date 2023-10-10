import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-primary">
        <Container>
            <Navbar.Brand href="#home">Blog-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/blogs">Blogs</Link>
                <Link className='link' to="/blog/new">New Blog</Link>
            </Nav>
            <Nav>
                <Link className='link' to="#deets">Login</Link>
                <Link className='link' to="#memes">signUp</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavBar