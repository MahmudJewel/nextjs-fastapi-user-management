"use client"
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
// css 
import style from "@/assets/css/signup.module.css";

import EventHandling from './EventHandling';
import apiService from '@/services/apiService';

export default function Signup() {
    const { handleChange, clickOnsubmit, values, errors } = EventHandling();

    // const clickOnsubmit = async (e) => {
    //     e.preventDefault();
    //     // console.log("your submission : ", values);
    //     // setErrors(ValidateText(values));
    //     // setIsSubmitting(true);
    //     const response = await apiService.get('users/');
    // };

    return (
        <Container >
            <Row className='mt-5'>
                <h2 className='text-center mb-4'>Create your account</h2>
                <Col md={3}>
                </Col>
                <Col md={6}>
                    <Form className={style.custom_bg} onSubmit={clickOnsubmit}>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text"
                                name='first_name'
                                placeholder="Enter first name"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text"
                                name='last_name'
                                placeholder="Enter last name"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address <span className="asteric">*</span> </Form.Label>
                            <Form.Control type="email"
                                name='email'
                                placeholder="Enter email"
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p className="text-danger text-center">{errors.email}</p>
                            )}
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password <span className="asteric">*</span></Form.Label>
                            <Form.Control type="password"
                                name='password'
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            {errors.password && (
                                <p className="text-danger text-center">{errors.password}</p>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Re-enter Password <span className="asteric">*</span></Form.Label>
                            <Form.Control type="password"
                                name='password2'
                                placeholder="Type password again"
                                onChange={handleChange}
                            />
                            {errors.password2 && (
                                <p className="text-danger text-center">{errors.password2}</p>
                            )}
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

