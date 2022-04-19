import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  
  return (
    <div style={{marginBottom:'50px',maxWidth:'100vw'}}>
      <Navbar  fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Alxander Method</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav variant="white" defaultActiveKey="/home" className="ms-auto">          
             <Nav.Link eventKey="link-1" as={Link} to='/home'>Home</Nav.Link>          
              {user?<Nav.Link eventKey="link-2" onClick={()=>signOut(auth)} >Sign out</Nav.Link>: 
               <Nav.Link eventKey="link-2" as={Link} to='/login'>Log In</Nav.Link> }      
          
              <Nav.Link eventKey="link-4" as={Link} to='/blog'>Blogs</Nav.Link>
              <Nav.Link eventKey="link-5" as={Link} to='/about'>About Me</Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
