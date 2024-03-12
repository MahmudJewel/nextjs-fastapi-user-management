import React from 'react'
import apiService, { getMethod } from '@/services/apiService'
import { getAccessToken } from '@/lib/actions'
import { Col, Container, Row } from 'react-bootstrap'

async function UserDetails() {
    const tkn = await getAccessToken()
    // console.log('from user details ==> ', tkn)
    // const user = await apiService.getMe('users/me/', tkn)
    // const user = await apiService.get('users/me/')
    const user = await getMethod('users/me/')
    console.log('From me ==============================================>', user);
    
    return (
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    {user && 
                        <>
                        First name: {user.first_name} <br />
                        Last name: {user.last_name} <br />
                        Email: {user.email} <br />
                        Role: {user.role} <br />
                        </>
                    }
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )
}

export default UserDetails