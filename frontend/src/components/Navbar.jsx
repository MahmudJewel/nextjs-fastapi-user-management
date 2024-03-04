"use client" // client side rendering 

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Link from 'next/link'

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Dynamic Nav</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <li>
                            <Link className="nav-link" href="/"> Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/page-1"> Page-1</Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/not-in"> Not-found</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Link
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" href="/blog">
                                        Action
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Another Action
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Something else here
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="nav-link disabled" href="/not-in"> disabled</Link>
                        </li>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;