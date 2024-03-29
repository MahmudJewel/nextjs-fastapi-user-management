"use client" // client side rendering 

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link'

function NavScrollExample({ loginToken }) {
    const pathname = usePathname();
    // const isActive = (path) => path === pathname;

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Nextjs-FastAPI Auth</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {/* ===================> left nav <========================  */}
                    <Nav
                        className="me-auto my-2 my-lg-0"
                    >

                        {/* <li>
                            <Link className="nav-link {isActive('/') ? 'nav-active' : ''}" href="/" > Home</Link>
                        </li> */}
                        <li>
                            <Link className={pathname == "/" ? "active-nav nav-link" : "nav-link"} href="/" > Home</Link>
                        </li>
                        <li>
                            <Link className={pathname == "/page-1" ? "active-nav nav-link" : "nav-link"} href="/page-1"> Page-1</Link>
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
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}

                    {/* ===================> right nav <========================  */}
                    <Nav className="me-2 my-2 my-lg-0"
                    >
                        {
                            loginToken ? (
                                <>
                                    <li>
                                        <Link className={pathname == "/me" ? "active-nav nav-link" : "nav-link"} href="/me"> user</Link>
                                    </li>
                                    <li>
                                        <Link className={pathname == "/logout" ? "active-nav nav-link" : "nav-link"} href="/logout"> Logout</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link className={pathname == "/signup" ? "active-nav nav-link" : "nav-link"} href="/signup"> Sign up</Link>
                                    </li>
                                    <li>
                                        <Link className={pathname == "/login" ? "active-nav nav-link" : "nav-link"} href="/login"> Login</Link>
                                    </li>
                                </>
                            )
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;

