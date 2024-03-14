"use client"
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// css 
import style from "@/assets/css/signup.module.css";
import EventHandler from './EventHandler';
import EventHandling from '../signup/EventHandling';  // from signup page


export default function Login() {
    const { isSubmitting } = EventHandling();
    const { clickOnsubmit, handleChange, errors } = EventHandler()
    return (
        <Container >
            {/* ========== alert messages ================== */}
            {isSubmitting && <>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <div className="alert alert-success text-center">
                            <div className="container d-flex justify-content-between">
                                <b className='text-center'>Account created successfully</b>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} ></Col>
                </Row>
            </>}

            <Row className='mt-3'>
                <h2 className='text-center mb-4'>Login to your account</h2>
                <Col md={3}>
                </Col>
                <Col md={6}>
                    <Form className={style.custom_bg} onSubmit={clickOnsubmit}>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address <span className="asteric">*</span> </Form.Label>
                            <Form.Control type="email"
                                name='email'
                                placeholder="Enter email"
                                onChange={handleChange}
                            />
                            {/* {errors.email && (
                                <p className="text-danger text-center">{errors.email}</p>
                            )} */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password <span className="asteric">*</span></Form.Label>
                            <Form.Control type="password"
                                name='password'
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            {errors && (
                                <p className="text-danger text-center">{errors.detail}</p>
                            )}
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
                <Col md={3}>
                </Col>
            </Row>

        </Container >
    )
}

