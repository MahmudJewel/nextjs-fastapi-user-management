"use client"
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// css 
import style from "@/assets/css/signup.module.css";

function signup() {
    return (
        <Container >
            <Row className='mt-5'>
                <h2 className='text-center mb-4'>Create your account</h2>
                <Col md={3}>
                </Col>
                <Col md={6}>
                    <Form className={style.custom_bg}>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address <span className="asteric">*</span> </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password <span className="asteric">*</span></Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Re-enter Password <span className="asteric">*</span></Form.Label>
                            <Form.Control type="password" placeholder="type Password again" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={3}>
                </Col>
            </Row>

        </Container>
    )
}

export default signup