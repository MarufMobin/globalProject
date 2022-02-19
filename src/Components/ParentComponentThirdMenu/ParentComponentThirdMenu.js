import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ThirdMenu from '../ThirdMenu/ThirdMenu';

const ParentComponentThirdMenu = () => {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <ThirdMenu></ThirdMenu>
                </Col>
                <Col lg={8}>
                    <h1>Hellow World</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default ParentComponentThirdMenu;