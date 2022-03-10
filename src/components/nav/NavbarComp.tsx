import {useDispatch} from 'react-redux'
import { Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './NavbarComp.css'
import { openModalAdd } from '../../actions/actions'
import { useState } from 'react'

export const NavbarComp = () => {

  const dispatch=useDispatch()
  const [searchTerm,setSearchTerm]=useState<string>('')

  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand as={Link} to='/' style={{ color: '#fff', marginLeft: '1rem' }}><h2>Bug Tracker</h2></Navbar.Brand>
        <Container fluid style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Row>
            <Col>
              <Nav.Link><span className="nav-link-style"
              onClick={()=>dispatch(openModalAdd())}
              >Add Bug</span></Nav.Link>
            </Col>
            <Col>
              <NavDropdown title={
                <span className="nav-link-style">Filter Bugs</span>
              }>
                <NavDropdown.Item ><span className='nav-dropdown'>All Bugs</span></NavDropdown.Item>
                <NavDropdown.Item ><span className='nav-dropdown'>Open Bugs</span></NavDropdown.Item>
                <NavDropdown.Item ><span className='nav-dropdown'>Closed Bugs</span></NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="me-2"
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </Form>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}
