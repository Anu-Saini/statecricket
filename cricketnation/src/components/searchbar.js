import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './header.css';

function Mainsearchbar() {
  return (
   <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
        <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="fa FaSistrix"> 🔍</Button>
            </Form>
        </Container>
      </Navbar>
   </div>
  )
};

  export default Mainsearchbar;