import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Body() {
    return (
    <div>
        <div class="left-menu">
            OK
        </div>
        <Container>
        <Row>
            <Col>1 of 1</Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
        </Container>
    </div>
    )
}

export default Body
