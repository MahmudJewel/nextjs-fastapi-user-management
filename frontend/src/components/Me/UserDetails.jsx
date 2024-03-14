import React from 'react'
import apiService, { getMethod } from '@/services/apiService'
import { getAccessToken } from '@/lib/actions'
import { Card, CardBody, Col, Container, Row, Table } from 'react-bootstrap'

async function UserDetails() {
    const user = await getMethod('users/me/')

    return (
        <Container>
            <Row>
                <h2 className='text-center'>My information</h2>
                <br />
                <Col md={3}></Col>
                <Col md={6}>
                    {user &&
                        <>
                            <Card>
                                <CardBody>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td>First name:</td>
                                                <td>{user.first_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Last name:</td>
                                                <td>{user.last_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td>{user.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Role:</td>
                                                <td>{user.role}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </>
                    }
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )
}

export default UserDetails