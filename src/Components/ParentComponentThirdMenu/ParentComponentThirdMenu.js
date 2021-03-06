import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeroSection from '../HeroSection/HeroSection';
import ThirdMenu from '../ThirdMenu/ThirdMenu';

const ParentComponentThirdMenu = () => {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <ThirdMenu></ThirdMenu>
                </Col>
                <Col lg={8}>
                    <HeroSection></HeroSection>
                </Col>
            </Row>
        </Container>
    );
};

export default ParentComponentThirdMenu;