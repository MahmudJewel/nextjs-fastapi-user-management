"use client";
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
// css 
import style from "@/assets/css/signup.module.css";
import UpdateHandler from './updateHandler';

function UpdateUser({ user }) {
    const { handleChange, clickOnsubmit, values, errors, isSubmitted } = UpdateHandler(user);

    return (
        <Container>
            {/* ========== alert messages ================== */}
            {isSubmitted && <>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <div className="alert alert-success text-center">
                            <div className="container d-flex justify-content-between">
                                <b className='text-center'>Information updated</b>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} ></Col>
                </Row>
            </>}

            <h2 className='text-center my-4'>Update your information</h2>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Form className={style.custom_bg} onSubmit={clickOnsubmit}>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First name </Form.Label>
                            <Form.Control type="text"
                                name='first_name'
                                value={values.first_name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLasttName">
                            <Form.Label>Last name </Form.Label>
                            <Form.Control type="text"
                                name='last_name'
                                value={values.last_name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )
}

export default UpdateUser
